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
    setNumbers 
  } = useStore();

  function operatorHandler(op) {
    if (!currentNumber) {
      console.log('ADD SOME NUMBER FIRST!')
      return;
    }
    setOperators(op);
    setNumbers(prev => prev.concat(Number(currentNumber)));
    setCurrentNumber('');
    // and call calc func
  }

  function currentNumberHandler(num) {
    const maxNumberLength = String(Number.MAX_SAFE_INTEGER).length;
    if (currentNumber.length >= maxNumberLength) {
      console.log('MAX CURRENT NUMBER LENGTH!');
      return;
    } else if (currentNumber.length === 0 && num === 0) {
      console.log('NO 0s AT THE BEGINNING!');
      return;
    } else {
      setCurrentNumber(prev => prev += num);
    }
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