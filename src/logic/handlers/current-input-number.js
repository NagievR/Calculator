export function currentInputNumber(store) {
  const { 
    currentNumber,
    setCurrentNumber, 
    setCurrentResult,
    log,
    clearStore,
  } = store;

  function isEndOfCalculations(num) {
    if (log[log.length - 1] !== '=') {
      return false;
    } 
    clearStore();
    setCurrentNumber(prev => prev += num);
    return true;
  }

  return {
    inputHandler(num) {
      if (isEndOfCalculations(num)) {
        return;
      };
      const maxNumberLength = String(Number.MAX_SAFE_INTEGER).length; 
      const numbersAmount = countNumbersAmount(currentNumber);
    
      if ((numbersAmount >= maxNumberLength) ||
        (!currentNumber.length && num === 0)) {
        return;
      }
      setCurrentResult('');
      setCurrentNumber(prev => prev += num);
    },

    floatKeyHandler(splitBy = '.') {
      setCurrentResult('');
      if (currentNumber.includes(splitBy)) {
        return;
      } else if (!currentNumber.length) {
        setCurrentNumber(prev => prev += '0' + splitBy);
      } else {
        setCurrentNumber(prev => prev += splitBy);
      }
    },

    negateKeyHandler() {
      const minus = '-';
      if (!currentNumber.length) {
        return;
      } else if (currentNumber.includes(minus)) {
        setCurrentNumber(prev => prev.slice(1));
      } else {
        setCurrentNumber(prev => minus + prev);
      }
    },

    deleteKeyHandler() {
      setCurrentResult('');
      if (currentNumber.includes('-') && currentNumber.length === 2) {
        setCurrentNumber('');
      } else {
        setCurrentNumber(prev => prev.slice(0, prev.length - 1));
      }
    }
  };
}

function countNumbersAmount(str) {
  const splitted = String(str).split('');
  const onlyNumbers = splitted.filter(it => !isNaN(it));
  return onlyNumbers.length;
}