import React, { useState, useContext, useRef } from 'react';

const Context = React.createContext();

export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  // const [numbers, setNumbers] = useState([]);
  // const [operators, setOperators] = useState([]);

  const numbersStack = useRef([]);  
  const operatorsStack = useRef([]);

  const [currentNumber, setCurrentNumber] = useState('');
  const [log, setLog] = useState([]);

  const operatorsAction = {
    '÷': {value: '÷', priority: 2, doCalc: (a, b) => a / b },
    '×': {value: '×', priority: 2, doCalc: (a, b) => a * b },
    '−': {value: '−', priority: 1, doCalc: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doCalc: (a, b) => a + b },
  };

  const context = {
    operatorsAction,

    currentNumber,
    setCurrentNumber,

    log,
    setLog,

    numbersStack: numbersStack.current,
    operatorsStack: operatorsStack.current,
  };

  console.log(log)
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