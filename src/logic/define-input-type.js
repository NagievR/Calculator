import React, { useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";

const Context = React.createContext();

export function useDefineInputType() {
  return useContext(Context);
}

export function DefineInputTypeProvider({ children }) {
  const { 
    operatorHandler, 

    currentNumberHandler,
    pointHandler,
    plusMinusHandler,
    
  } = useInputHandlers();

  const operatorsAction = {
    '÷': {value: '/', priority: 2, doCalc: (a, b) => a / b },
    '×': {value: '*', priority: 2, doCalc: (a, b) => a * b },
    '−': {value: '-', priority: 1, doCalc: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doCalc: (a, b) => a + b },
  };

  function defineInputType(value) {
    if (!isNaN(value)) {
      currentNumberHandler(value);
      return;
    } 

    if (operatorsAction[value]) {
      operatorHandler( operatorsAction[value] );
      return;
    }

    switch(value) {
      case '=': 
        
        break;
      case 'c': 
        
        break;
      case '⌫': 
        
        break;
      case '±': 
        plusMinusHandler();
        break;
      case '.': 
        pointHandler();
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