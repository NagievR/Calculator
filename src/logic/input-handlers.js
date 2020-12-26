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
      return;
    }
    setOperators(op);
    setNumbers(prev => prev.concat(Number(currentNumber)));
    setCurrentNumber('');
    // and call calc func
  }

  
  // ****** current number handlers ******
    function currentNumberHandler(num) {
      const maxNumberLength = String(Number.MAX_SAFE_INTEGER).length;
      const numbersAmount = countNumbersAmount(currentNumber);

      if ((numbersAmount >= maxNumberLength) || 
        (currentNumber.length === 0 && num === 0)) {
        return;
      } 
      setCurrentNumber(prev => prev += num);
    }

    function pointHandler(point = '.') {
      if (currentNumber.includes(point)) {
        return;
      } else if (!currentNumber.length) {
        setCurrentNumber(prev => prev += '0' + point);
      } else {
        setCurrentNumber(prev => prev += point);
      }
    }

    function plusMinusHandler() {
      const minus = '-';
      if (!currentNumber.length) {
        return;
      } else if (currentNumber.includes(minus)) {
        setCurrentNumber(prev => prev.slice(1));
      } else {
        setCurrentNumber(prev => minus + prev);
      }
    }
  // -------/current number handlers


  const context = {
    operatorHandler,

    currentNumberHandler,
    pointHandler,
    plusMinusHandler,

  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}


function countNumbersAmount(str) {
  const splitted = str.split('');
  const onlyNumbers = splitted.filter(it => !isNaN(it));

  return onlyNumbers.length;
}