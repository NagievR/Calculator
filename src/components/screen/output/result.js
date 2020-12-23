import { React, useRef, useState, useEffect } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const [number, setNumber] = useState('0');
  const { currentNumber } = useStore();
  const resRef = useRef();
  
  useEffect(() => {
    console.log( String(Number.MAX_SAFE_INTEGER) );
    const maxNumberLength = 21;
    if (number.length < maxNumberLength) {
      setNumber(currentNumber);
    } else {
      alert('Maximum number seize!'); 
    }
  }, [number, currentNumber]);

  return (
    <Textfit 
      mode="single"
      max={80} 
      min={30}>
      <div className={`output-elem-wrap`}>   
        <span ref={resRef} id='result'>
          {number}
        </span>
      </div>
    </Textfit>
  );
}