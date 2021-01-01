import React, { useContext } from 'react';
import { operatorsManager, calculate } from "./calculate.js";
import { useStore } from "./store.js";

const Context = React.createContext();
export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  const { 
    currentNumber,
    setCurrentNumber, 
    setCurrentResult,
    log,
    setLog,
    numbersStack,
    operatorsStack,
  } = useStore();

  function clearKeyHandler() {
    operatorsStack.length = 0;
    numbersStack.length = 0;
    setLog([]);
    setCurrentNumber('');
    setCurrentResult('');
    console.clear();
  }

  function mathOperatorsHandler(op) {
    if (!currentNumber) {
      return;
    }
    setLog(prev => prev.concat(currentNumber));
    setLog(prev => prev.concat(op.value));

    numbersStack.push(Number(currentNumber));
    operatorsManager(op, operatorsStack, numbersStack);
    setCurrentNumber('');
    setCurrentResult(numbersStack[numbersStack.length - 1]);
  }

  function equalsKeyHandler() {
    if (!operatorsStack.length) {
      return;
    }
    if (!currentNumber) {
      operatorsStack.pop();
      setLog(prev => prev.slice(0, prev.length - 1));
    } else {
      numbersStack.push(Number(currentNumber));
      setLog(prev => prev.concat(currentNumber));
    }
    setLog(prev => prev.concat('='));
    calculate(operatorsStack, numbersStack, operatorsStack.length);
    setCurrentResult(numbersStack[numbersStack.length - 1]);
    setCurrentNumber(String(numbersStack[numbersStack.length - 1]));
  }

  
  // ****** current number handlers ******
    function endOfCalculationsHandler() {
      if (log[log.length - 1] === '=') {
        clearKeyHandler();
        // setLog([]);
        // setCurrentNumber('');
        // setCurrentResult('');
      } 
    }

    function currentNumberHandler(num) {
      const maxNumberLength = String(Number.MAX_SAFE_INTEGER).length;
      const numbersAmount = countNumbersAmount(currentNumber);

      if ((numbersAmount >= maxNumberLength) || 
        (currentNumber.length === 0 && num === 0)) {
        return;
      }
      endOfCalculationsHandler();
      setCurrentResult('');
      setCurrentNumber(prev => prev += num);
    }

    function floatKeyHandler(splitBy = '.') {
      setCurrentResult('');
      if (currentNumber.includes(splitBy)) {
        return;
      } else if (!currentNumber.length) {
        setCurrentNumber(prev => prev += '0' + splitBy);
      } else {
        setCurrentNumber(prev => prev += splitBy);
      }
    }

    function negateKeyHandler() {
      const minus = '-';
      if (!currentNumber.length) {
        return;
      } else if (currentNumber.includes(minus)) {
        setCurrentNumber(prev => prev.slice(1));
      } else {
        setCurrentNumber(prev => minus + prev);
      }
    }

    function deleteKeyHandler() {
      setCurrentResult('');
      if (currentNumber.includes('-') && currentNumber.length === 2) {
        setCurrentNumber('');
      } else {
        setCurrentNumber(prev => prev.slice(0, prev.length - 1));
      }
    }
  // -------/current number handlers

  const context = {
    mathOperatorsHandler,
    currentNumberHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
    equalsKeyHandler,
    clearKeyHandler,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}


function countNumbersAmount(str) {
  const splitted = str.split('');
  const onlyNumbers = splitted.filter(it => !isNaN(it));
  return onlyNumbers.length;
}