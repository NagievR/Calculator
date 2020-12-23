import React, { useRef, useState, useContext } from 'react';

const Context = React.createContext();

export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  const [numbers, setNumbers] = useState([]);
  const operators = useRef([]);
  const [currentNumber, setCurrentNumber] = useState('0');

  function setOperators(op) {
    const prevArr = operators.current;
    operators.current = prevArr.concat(op);
  }

  const context = {
    currentNumber,
    setCurrentNumber,
    setNumbers,
    setOperators,
  };

  // console.log('*******************');
  // console.log('currentNumber:\n');
  // console.log(currentNumber)
  // console.log('operators:\n');
  // console.log(operators.current);
  // console.log('numbers:\n');
  // console.log(numbers)
  // console.log('*******************');

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}