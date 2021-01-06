import React, { useContext } from 'react';
import { useStore } from "./store.js";
import { calculate } from "./calculate.js";
import { currentInputNumber } from './handlers/current-input-number.js';
import { mathOperatorsAction } from './handlers/math-operator-action.js';

const Context = React.createContext();
export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  const store = useStore();
  const { 
    currentNumber,
    setCurrentNumber, 
    setCurrentResult,
    // log,
    setLog,
    numbersStack,
    operatorsStack,
    clearStore,
  } = useStore();
  
  const {
    numberHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
  } = currentInputNumber(store);

  const { 
    mathOperatorHandler,
  } = mathOperatorsAction(store);

  function equalsKeyHandler() {
    if (!operatorsStack.length) { // ================
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
  
  function clearKeyHandler() {
    clearStore();
  }

  const context = {
    numberHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
    mathOperatorHandler,
    equalsKeyHandler,
    clearKeyHandler,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}


