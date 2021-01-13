import {React, useState, useEffect, useRef} from 'react';

import './output.css';
import { useStore } from "../../../logic/providers/store.js";

export function OperationsLog({ setSwitcherDisplaying, displayWidth }) {
  const [isOversized, setIsOversized] = useState(false);
  const logContainerRef = useRef();
  const { log } = useStore();

  useEffect(() => {
    if (logContainerRef.current.offsetWidth > displayWidth) {
      setIsOversized(true);
      setSwitcherDisplaying(true);
    } else {
      setIsOversized(false);
      setSwitcherDisplaying(false);
    }
  }, [log, setSwitcherDisplaying, displayWidth]);

  return (
    <div className='log-margin-bottom'>
      <div className={`output-elem-wrap ${isOversized ? 'oversized' : ''}`}>
        <span ref={logContainerRef} id='log'>{log.join(' ')}</span>
      </div>
    </div>
  );
}