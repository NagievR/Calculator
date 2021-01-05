import React, { useState, useContext, useRef } from 'react';

const Context = React.createContext();
export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  const numbersStack = useRef([]);  
  const operatorsStack = useRef([]);

  const [currentResult, setCurrentResult] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [log, setLog] = useState([]);

  const operatorsAction = {
    '÷': {value: '÷', priority: 2, doOperation: (a, b) => a / b },
    '×': {value: '×', priority: 2, doOperation: (a, b) => a * b },
    '−': {value: '−', priority: 1, doOperation: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doOperation: (a, b) => a + b },
  };

  function clearStore() {
    operatorsStack.current.length = 0;
    numbersStack.current.length = 0;
    setCurrentNumber('');
    setCurrentResult('');
    setLog([]);
  }

  const context = {
    currentNumber,
    setCurrentNumber,
    currentResult,
    setCurrentResult,
    log,
    setLog,
    operatorsAction,
    numbersStack: numbersStack.current,
    operatorsStack: operatorsStack.current,
    clearStore,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}