const changeInto = {
  'Delete': 'c',
  'Escape': 'c',
  'Backspace': '⌫',
  'Enter': '=',
  '/': '÷',
  '*': '×',
  '-': '−',
  '+': '+',
  '.': '.',
};

export function handleKeyboardEvent(key) {

  if (key === null || (isNaN(key) && !changeInto[key])) {
    return null;

  } else if (changeInto[key]) {
    return changeInto[key]; 

  } else if (!isNaN(key)) {
    return key;

  } else {
    console.log(`unknown key: "${key}"`);
  }
  
}