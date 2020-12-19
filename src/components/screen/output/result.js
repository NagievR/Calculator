import {React, useRef, useState, useEffect} from 'react';

import './output.css';

export function Result({ displayWidth }) {
  const [number, setNumber] = useState('0');
  const [fontSize, setFontSize] = useState(80);
  const resRef = useRef();

  useEffect(() => {
    const percentDecrease = 1.18;
    if (resRef.current.offsetWidth >= displayWidth) {
      setFontSize(prev => prev /= percentDecrease);
    } 
  }, [number, displayWidth]);

  function addNumberTest() {
    console.log(Number.MAX_SAFE_INTEGER)

    const maxNumberLength = 21;
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