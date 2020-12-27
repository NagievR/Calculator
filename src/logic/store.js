import React, { useState, useContext } from 'react';

const Context = React.createContext();

export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');
  const [operators, setOperators] = useState([]);
  const [log, setLog] = useState([]);

  const context = {
    currentNumber,
    setCurrentNumber,

    numbers,
    setNumbers,

    setOperators,

    log,
    setLog,
  };

  // console.log('*******************');
  // console.log('currentNumber:\n');
  // console.log(currentNumber)
  // console.log('operators:\n');
  // console.log(operators);
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