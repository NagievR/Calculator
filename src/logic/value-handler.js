import React from 'react';
import { useState, useContext } from 'react';

const Context = React.createContext();

export function useValueHandler() {
  return useContext(Context);
}

export function ValueHandlerProvider({ children }) {
  const [currNum, setCurrNum] = useState('0');

  function handleValue(v) {
    console.log(v);
    // console.log(isNaN(v));
    
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
    handleValue,
    currNum,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}