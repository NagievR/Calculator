import React, { useState, useContext, useRef } from 'react';

const Context = React.createContext();
export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  
  const numbersStack = useRef([]);  
  const operatorsStack = useRef([]);

  const [currentNumber, setCurrentNumber] = useState('');
  const [result, setResult] = useState('');
  const [interimResult, setInterimResult] = useState('');
  const [log, setLog] = useState([]);

  const separateFloatBy = '.';

  const operatorsAction = {
    '÷': {value: '÷', priority: 2, doOperation: (a, b) => a / b },
    '×': {value: '×', priority: 2, doOperation: (a, b) => a * b },
    '−': {value: '−', priority: 1, doOperation: (a, b) => a - b }, 
    '+': {value: '+', priority: 1, doOperation: (a, b) => a + b },
  };
  const symbols = {
    equals: '=',
    clearAll: 'c',
    remove: '⌫',
    negate: '±',
    float: '.',
  };

  function clearStore() {
    operatorsStack.current.length = 0;
    numbersStack.current.length = 0;
    setCurrentNumber('');
    setResult('');
    setInterimResult('');
    setLog([]);
  }

  const context = {
    separateFloatBy,
    currentNumber,
    setCurrentNumber,
    result,
    setResult,
    interimResult,
    setInterimResult,
    log,
    setLog,
    numbersStack: numbersStack.current,
    operatorsStack: operatorsStack.current,
    symbols,
    operatorsAction,
    clearStore,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}