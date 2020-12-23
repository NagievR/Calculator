import React, { useState, useContext } from 'react';
import { useStore } from "./store.js";

const Context = React.createContext();

export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  function concatCurrNumber() {
    
  }

  const context = {
    concatCurrNumber,

  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}