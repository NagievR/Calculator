import React, { useContext } from 'react';
import { useHandlersComposition } from "./handlers-composition.js";

const Context = React.createContext();
export function useDefineInputType() {
  return useContext(Context);
}

const operatorsAction = {
  '÷': {value: '÷', priority: 2, doOperation: (a, b) => a / b },
  '×': {value: '×', priority: 2, doOperation: (a, b) => a * b },
  '−': {value: '−', priority: 1, doOperation: (a, b) => a - b }, 
  '+': {value: '+', priority: 1, doOperation: (a, b) => a + b },
};
const symbols = {
  equals: '=',
  clearAll: 'c',
  remove: '⌫',
  negate: '±',
  float: '.',
};

export function DefineInputTypeProvider({ children }) {
  const { 
    mathOperatorHandler, 
    numberHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
    equalsKeyHandler,
    clearKeyHandler,
  } = useHandlersComposition();

  function defineInputType(value) {
    if (!isNaN(value)) {
      numberHandler(String(value));
      return;
    } 
    if (operatorsAction[value]) {
      mathOperatorHandler(operatorsAction[value]);
      return;
    }
    switch(value) {
      case symbols.equals: 
        equalsKeyHandler();
        break;
      case symbols.clearAll: 
        clearKeyHandler();
        break;
      case symbols.remove: 
        deleteKeyHandler();
        break;
      case symbols.negate: 
        negateKeyHandler();
        break;
      case symbols.float: 
        floatKeyHandler();
        break;
      default: 
        alert('unknown symbol');
        console.log(`unknown symbol: "${value}"`);
    }
  }

  const context = {
    defineInputType,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}