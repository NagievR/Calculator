import React, { useContext, useEffect } from 'react';
import { calculatorManager, calculate } from "./calc.js";
import { useStore } from "./store.js";

const Context = React.createContext();

export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  const { 
    currentNumber,
    setCurrentNumber, 

    numbers,
    setNumbers,
    
    operators,
    setOperators, 

    setLog,
  } = useStore();

  // useEffect(() => {
  //   console.log('effect');
  //   console.log(numbers, operators);
  //   const [nums, ops] = calculatorManager(numbers, operators);

  //   setOperators(ops);
  //   setNumbers(nums);
  // }, [operators, numbers]);

  function mathOperatorsHandler(op) {
    if (!currentNumber) {
      return;
    }
    setLog(prev => prev.concat(currentNumber));
    setLog(prev => prev.concat(op.value));

    setOperators(prev => prev.concat(op));
    setNumbers(prev => prev.concat(Number(currentNumber)));
    setCurrentNumber('');
  }


  function clearKeyHandler() {
    setLog([]);
    setCurrentNumber('');
    setNumbers([]);
    setOperators([]);
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

    function pointKeyHandler(point = '.') {
      if (currentNumber.includes(point)) {
        return;
      } else if (!currentNumber.length) {
        setCurrentNumber(prev => prev += '0' + point);
      } else {
        setCurrentNumber(prev => prev += point);
      }
    }

    function negateKeyHandler() {
      const minus = '-';
      if (!currentNumber.length) {
        return;
      } else if (currentNumber.includes(minus)) {
        setCurrentNumber(prev => prev.slice(1));
      } else {
        setCurrentNumber(prev => minus + prev);
      }
    }

    function deleteKeyHandler() {
      if (currentNumber.includes('-') && currentNumber.length === 2) {
        setCurrentNumber('');
      } else {
        setCurrentNumber(prev => prev.slice(0, prev.length - 1));
      }
    }
  // -------/current number handlers

  const context = {
    mathOperatorsHandler,

    currentNumberHandler,
    pointKeyHandler,
    negateKeyHandler,
    deleteKeyHandler,

    clearKeyHandler,
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