import React from 'react';
import { useState, useContext } from 'react';

const Context = React.createContext();

export function useValueHandler() {
  return useContext(Context);
}

export function ValueHandlerProvider({ children }) {

  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  );
}