import {React, useRef, useState, useEffect} from 'react';

import './output.css';

export function Result({ displayWidth }) {
  const [isOversized, setIsOversized] = useState(false);
  const [number, setNumber] = useState('0');
  const resRef = useRef();

  useEffect(() => {
    if (resRef.current.offsetWidth > displayWidth) {
      setIsOversized(true);

    } // eslint-disable-next-line
  }, [number]);

  return (
    <div className={`output-elem-wrap ${isOversized ? 'oversized' : ''}`}>
      <span onClick ={() => setNumber(prev => prev + Math.round(Math.random() * 10))} ref={resRef} id='result'>{number}</span>
    </div>
  );
}