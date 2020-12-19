import React, { useState, useContext } from 'react';

const Context = React.createContext();

export function useInputHandler() {
  return useContext(Context);
}

export function InputHandlerProvider({ children }) {
  const [currNum, setCurrNum] = useState('0');

  function handleInput(v) {
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
    handleInput,
    currNum,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}