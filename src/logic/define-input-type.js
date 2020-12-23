import React, { useState, useContext } from 'react';
import { useInputHandlers } from "./input-handlers.js";

const Context = React.createContext();

export function useDefineInputType() {
  return useContext(Context);
}

export function DefineInputTypeProvider({ children }) {
  const [currNum, setCurrNum] = useState('0');

  function defineInputType(v) {
    if (!isNaN(v)) {
      setCurrNum(prevNum => prevNum += v);
    } else {
      setCurrNum('0');
    }

    // switch(v) {
    //   // handle symbols
    //   // ...
    //   case 
    // }
    // console.log(currNum);
    
    return 
  }

  const context = {
    defineInputType,
    currNum,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}