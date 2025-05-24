const display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

function handleInput(key) {
  if (key === 'C') {
    currentInput = '';
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if ('0123456789+-*/.'.includes(key)) {
    currentInput += key;
  }
  updateDisplay();
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => handleInput(button.getAttribute('data-key')));
});

document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.EnterBackspaceC';
  if (validKeys.includes(e.key) || e.key === 'c' || e.key === 'C') {
    handleInput(e.key === 'c' ? 'C' : e.key);
  }
});
