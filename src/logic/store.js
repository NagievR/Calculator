import React, { useRef, useState, useContext } from 'react';

const Context = React.createContext();

export function useStore() {
  return useContext(Context);
}

export function StoreProvider({ children }) {
  const [numbers, setNumbers] = useState([]);
  const operators = useRef([]);
  const [currentNumber, setCurrentNumber] = useState('0');

  const context = {
    
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}