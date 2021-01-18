import React, { useState, useEffect, useRef } from 'react';
import styles from './output.module.css';

import { useStore } from "../../../logic/providers/store.js";

export function OperationsLog({ setSwitcherDisplaying, maxDisplayWidth }) {
  const [isOversized, setIsOversized] = useState(false);
  const logContainerRef = useRef();
  const { log, history } = useStore();

  useEffect(() => {
    if (logContainerRef.current.offsetWidth > maxDisplayWidth || history.length) {
      setSwitcherDisplaying(true);
    } else {
      setSwitcherDisplaying(false);
    }
    if (logContainerRef.current.offsetWidth > maxDisplayWidth) {
      setIsOversized(true);
    } else {
      setIsOversized(false);
    }
  }, [log, setSwitcherDisplaying, maxDisplayWidth, history]);

  const oversizedCheck = () => isOversized ? styles.oversized : '';

  return (
    <div className={styles.log_margin_bottom}>
      <div className={`${styles.output_elem_wrap} ${oversizedCheck()}`}>
        <span 
          ref={logContainerRef} 
          id={styles.log}
          >{log.join(' ')}
        </span>
      </div>
    </div>
  );
}