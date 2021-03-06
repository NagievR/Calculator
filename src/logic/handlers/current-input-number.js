export function currentInputNumber(store) {
  const {
    separateFloatBy,
    currentNumber,
    setCurrentNumber, 
    setInterimResult,
    result,
    setResult,
    log,
    setHistory,
    clearStore,
  } = store;

  function isEndOfExpression(num = '') {
    if (log[log.length - 1] !== '=') {
      return false;
    }
    clearStore();
    setHistory(prev => prev.concat([[log.join(' '), result]]));
    setCurrentNumber(String(num));
    return true;
  }

  return {
    numberHandler(num) {
      if (isEndOfExpression(num)) {
        return;
      } 
      setInterimResult('');

      const maxNumberLength = String(Number.MAX_SAFE_INTEGER).length; 
      const numbersAmount = countNumbersAmount(currentNumber);
      if (numbersAmount >= maxNumberLength) {
        return;

      } else if (
        currentNumber[0] === '0' 
        && currentNumber.length > 0  
        && !currentNumber.includes(separateFloatBy)
      ) {
        setCurrentNumber(prev => prev.slice(1) + (num !== '0' ? num : ''));
        return;
      }      

      setCurrentNumber(prev => prev += num);
    },

    floatKeyHandler() {
      if (currentNumber.includes(separateFloatBy) || 
        isEndOfExpression('0' + separateFloatBy)) {
        return;
      } else if (!currentNumber.length) {
        setCurrentNumber(prev => prev += '0' + separateFloatBy);
      } else {
        setCurrentNumber(prev => prev += separateFloatBy);
      }
      setResult('');
      setInterimResult('');
    },

    negateKeyHandler() {
      if (!currentNumber.length || currentNumber === '0' || isEndOfExpression()) {
        return;
      } else if (currentNumber.includes('-')) {
        setCurrentNumber(prev => prev.slice(1));
      } else {
        setCurrentNumber(prev => '-' + prev);
      }
    },

    deleteKeyHandler() {
      if (isEndOfExpression()) {
        return;
      } else if (currentNumber.includes('-') && currentNumber.length === 2) {
        setCurrentNumber('');
      } else {
        setCurrentNumber(prev => prev.slice(0, prev.length - 1));
      }
    },

  };
}

function countNumbersAmount(num) {
  const splitted = String(num).split('');
  const onlyNumbers = splitted.filter(it => !isNaN(it));
  return onlyNumbers.length;
}