import React, { useState, useContext } from 'react';
import { useStore } from "./store.js";

const Context = React.createContext();

export function useInputHandlers() {
  return useContext(Context);
}

export function InputHandlersProvider({ children }) {
  const context = {
    
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}