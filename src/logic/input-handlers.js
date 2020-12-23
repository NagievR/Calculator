import React, { useContext } from 'react';
import { useStore } from "./store.js";

const Context = React.createContext();

export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  const { 
    setCurrentNumber, 
    currentNumber,
    setOperators, 
    setNumbers } = useStore();

  function operatorHandler(op) {
    if (currentNumber === '0') {
      console.log('ADD SOME NUMBER FIRST!')
      return;
    }
    setOperators(op);
    setNumbers(prev => prev.concat(Number(currentNumber)));
    setCurrentNumber('0');
    // and call calc func
  }

  function currentNumberHandler(str) {
    setCurrentNumber(prev => prev += str);
  }


  const context = {
    operatorHandler,
    currentNumberHandler,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}