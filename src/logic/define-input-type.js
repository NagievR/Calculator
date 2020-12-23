import React, { useState, useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";
import { useStore } from "./store.js";

const Context = React.createContext();

export function useDefineInputType() {
  return useContext(Context);
}

export function DefineInputTypeProvider({ children }) {
  const { addNumber, addOperator } = useStore();

  const operatorsAction = {
    '÷': {value: '/', priority: 2, doCalc: (a, b) => a / b },
    '×': {value: '*', priority: 2, doCalc: (a, b) => a * b },
    '−': {value: '-', priority: 1, doCalc: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doCalc: (a, b) => a + b },
  };

  function defineInputType(value) {
    if (!isNaN(value)) {
      addNumber(value);
      return;
    } 

    if (operatorsAction[value]) {
      addOperator( operatorsAction[value] );
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
        
      break;
      case '.': 
        
      break;
      default: alert('unknown symbol!');
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