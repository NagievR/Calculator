import {React, useRef, useState, useEffect} from 'react';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result({ displayWidth }) {
  const initialFontSize = 80;
  const [number, setNumber] = useState('0');
  const [fontSize, setFontSize] = useState(initialFontSize);
  const { currentNumber } = useStore();
  const resRef = useRef();

  useEffect(() => {
    const percentDecrease = 1.18;

    console.log(resRef.current.offsetWidth, displayWidth);
    console.log(fontSize)

    if (resRef.current.offsetWidth >= displayWidth) {
      console.log('shut up');
      setFontSize( prev => prev /= percentDecrease );
    } else if (null) {
      
    }
  }, [number, displayWidth]);
  
  useEffect(() => {
    // String(Number.MAX_SAFE_INTEGER).length;
    const maxNumberLength = 21;
    if (number.length < maxNumberLength) {
      setNumber(currentNumber);
    } else {
      alert('Maximum number seize!'); 
    }
  }, [number, currentNumber]);

  return (
    <div className={`output-elem-wrap`}> 
      <span 
        style={{fontSize: fontSize}}
        ref={resRef} 
        id='result'>
        {number}
      </span>
    </div>
  );
}