import {React, useRef, useState, useEffect} from 'react';

import './output.css';

export function Result({ displayWidth }) {
  const [number, setNumber] = useState('0');
  const [fontSize, setFontSize] = useState(80);
  const resRef = useRef();

  useEffect(() => {
    if (resRef.current.offsetWidth >= displayWidth) {
      setFontSize(prev => prev /= 1.18);
    } 
  }, [number, displayWidth]);

  function addNumberTest() {
    const maxNumberLength = 17;
    if (number.length < maxNumberLength) {
      return setNumber(prev => prev + Math.round(Math.random() * 10));
    } else {
      alert('Maximum number seize!');
    }
  }

  return (
    <div className={`output-elem-wrap`}> 
      <span 
        style={{fontSize: fontSize}}
        onClick ={addNumberTest}
        ref={resRef} 
        id='result'>
        {number}
      </span>
    </div>
  );
}