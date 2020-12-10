import {React, useState, useEffect, useRef} from 'react';

import './output.css';

export function OperationsLog({setJournalToggle, displayWidth}) {
  const [isOversized, setIsOversized] = useState(false);
  const [expr, setExpr] = useState('25656');
  const ref = useRef();

  useEffect(() => {
    if (ref.current.offsetWidth > displayWidth) {
      setIsOversized(true);
      setJournalToggle(true);
    } // eslint-disable-next-line
  }, [expr])

  return (
    <div className='log-margin-bottom'>
      <div className={`output-elem-wrap ${isOversized ? 'oversized' : ''}`}>
        <span ref={ref} onClick={() => setExpr(prev => prev + Math.round(Math.random() * 10))} id='log'>{expr}</span>
      </div>
    </div>
  );
}