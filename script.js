const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});

const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}

function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;

  
  const output = `Eres parte del equipo creativo de una empresa, te voy a dar un script y trabajarás a partir del mismo: ${input1}. 1°. Reconoce si hay falta de información clave para los editores y muestra qué es lo que habría que corregir y además haz una recomendación para el mismo. 2°. sugiere referencias y elementos visuales cuando no aparezcan que sigan con la lógica del script. 3°. Sabiendo que la producción se utilizará en la siguientes red ${input2}, escribe los formatos en los que debe realizarse con respecto a los tamaños y dimensiones del video, te pido que no inventes y aclares para qué uso en caso de cada red social, bajo el Título de Formato. 4°. Responde cuál es la principal Optimización del video.`;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

 // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });
}
const input3Elements = document.querySelectorAll('.input3');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });
const input4Elements = document.querySelectorAll('.input4');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });

// Event listeners for input fields
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}
