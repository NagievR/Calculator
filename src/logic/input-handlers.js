import React, { useContext, useRef } from 'react';
import { operatorsManager, calculate } from "./calculate.js";
import { useStore } from "./store.js";
import { currentInputNumber,  } from './handlers/current-input-number.js';

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
    clearStore,
  } = useStore();

  const store = useStore();
  
  function clearKeyHandler() {
    clearStore();
  }
  
  const {
    inputHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
  } = currentInputNumber(store);



  let savedNumbersStack = useRef(null);
  let savedOperatorsStack = useRef(null);

  function changeOperator(op) {
    if (op.value === log[log.length - 1] || !log.length) {
      return;
    }
    numbersStack.length = 0;
    numbersStack.push(...savedNumbersStack.current);

    operatorsStack.length = 0;
    operatorsStack.push(...savedOperatorsStack.current);
    
    setLog(prev => prev.slice(0, prev.length - 1));
    setLog(prev => prev.concat(op.value));
    
    operatorsManager(op, operatorsStack, numbersStack);
    setCurrentResult(numbersStack[numbersStack.length - 1]);
  }

  function mathOperatorsHandler(op) {
    if (!currentNumber && isNaN(log[log.length - 1])) {
      changeOperator(op);
      return;
    }
    setLog(prev => prev.concat(currentNumber, op.value));

    numbersStack.push(Number(currentNumber));
    setCurrentNumber('');

    savedNumbersStack.current = numbersStack.slice();
    savedOperatorsStack.current = operatorsStack.slice();
    
    operatorsManager(op, operatorsStack, numbersStack);
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

  // -------/current number handlers

  const context = {
    inputHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
    mathOperatorsHandler,
    equalsKeyHandler,
    clearKeyHandler,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}


