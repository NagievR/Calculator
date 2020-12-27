import React, { useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";

const Context = React.createContext();

export function useDefineInputType() {
  return useContext(Context);
}

export function DefineInputTypeProvider({ children }) {
  const { 
    mathOperatorsHandler, 

    currentNumberHandler,
    pointKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,

    clearKeyHandler,
  } = useInputHandlers();

  const operatorsAction = {
    '÷': {value: '÷', priority: 2, doCalc: (a, b) => a / b },
    '×': {value: '×', priority: 2, doCalc: (a, b) => a * b },
    '−': {value: '−', priority: 1, doCalc: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doCalc: (a, b) => a + b },
  };

  function defineInputType(value) {
    if (!isNaN(value)) {
      currentNumberHandler(value);
      return;
    } 

    if (operatorsAction[value]) {
      mathOperatorsHandler( operatorsAction[value] );
      return;
    }

    switch(value) {
      case '=': 
        
        break;
      case 'c': 
        clearKeyHandler();
        break;
      case '⌫': 
        deleteKeyHandler();
        break;
      case '±': 
        negateKeyHandler();
        break;
      case '.': 
        pointKeyHandler();
        break;
      default: 
        alert('unknown symbol!');
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