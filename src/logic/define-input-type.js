import React, { useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";
import { useStore } from './store.js';

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
    equalsHandler,

    clearKeyHandler,
  } = useInputHandlers();

  const { operatorsAction } = useStore()

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
        equalsHandler();
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