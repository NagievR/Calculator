import React, { useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";
import { useStore } from './store.js';

const Context = React.createContext();
export function useDefineInputType() {
  return useContext(Context);
}

export function DefineInputTypeProvider({ children }) {
  const symbols = {
    equals: '=',
    clearAll: 'c',
    remove: '⌫',
    negate: '±',
    float: '.',
  };
  const { operatorsAction } = useStore();
  const { 
    mathOperatorsHandler, 
    inputHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
    equalsKeyHandler,
    clearKeyHandler,
  } = useInputHandlers();

  function defineInputType(value) {
    if (!isNaN(value)) {
      inputHandler(value);
      return;
    } 
    if (operatorsAction[value]) {
      mathOperatorsHandler( operatorsAction[value] );
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