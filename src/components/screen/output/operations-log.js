import {React, useState, useEffect, useRef} from 'react';

import './output.css';

export function OperationsLog({ setSwitcherDisplaying, displayWidth }) {
  const [isOversized, setIsOversized] = useState(false);
  const [expr, setExpr] = useState('256465465465465465464465556');
  const ref = useRef();

  useEffect(() => {
    if (ref.current.offsetWidth > displayWidth) {
      setIsOversized(true);
      setSwitcherDisplaying(true);
    } else {
      setIsOversized(false);
      setSwitcherDisplaying(false);
    }
  }, [expr, setSwitcherDisplaying, displayWidth])

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'b' && e.ctrlKey) {
        setExpr('256465465465465465464465556');
      }
    });
  }, []);

  return (
    <div className='log-margin-bottom'>
      <div className={`output-elem-wrap ${isOversized ? 'oversized' : ''}`}>
        <span ref={ref} onClick={() => setExpr(prev => prev + Math.round(Math.random() * 10))} id='log'>{expr}</span>
      </div>
    </div>
  );
}