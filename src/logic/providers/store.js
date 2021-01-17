import React, { useState, useContext, useRef } from 'react';

const Context = React.createContext();
export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  
  const numbersStack = useRef([]);  
  const operatorsStack = useRef([]);

  const separateFloatBy = '.';
  const [currentNumber, setCurrentNumber] = useState('');
  const [result, setResult] = useState('');
  const [interimResult, setInterimResult] = useState('');
  const [log, setLog] = useState([]);
  const [history, setHistory] = useState([]);

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
    history,
    setHistory,
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