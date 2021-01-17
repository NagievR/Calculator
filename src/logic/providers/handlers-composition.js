import React, { useContext } from 'react';
import { useStore } from "./store.js";

// handlers
import { clearKeyAction } from "../handlers/clear-key-action.js";
import { currentInputNumber } from '../handlers/current-input-number.js';
import { mathOperatorsAction } from '../handlers/math-operator-action.js';
import { equalsKeyAction } from '../handlers/equals-key-action.js'

const Context = React.createContext();
export function useHandlersComposition() {
  return useContext(Context);
}

export function HandlersCompositionProvider({ children }) {
  const store = useStore();

  const {
    clearKeyHandler,
  } = clearKeyAction(store);
  
  const {
    numberHandler,
    floatKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,
  } = currentInputNumber(store);

  const { 
    mathOperatorHandler,
  } = mathOperatorsAction(store);

  const {
    equalsKeyHandler,
  } = equalsKeyAction(store);
  
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


