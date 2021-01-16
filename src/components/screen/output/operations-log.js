import {React, useState, useEffect, useRef} from 'react';
import styles from './output.module.css';

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

  const oversizedCheck = () => isOversized ? styles.oversized : '';

  return (
    <div className={styles.log_margin_bottom}>
      <div className={`${styles.output_elem_wrap} ${oversizedCheck()}`}>
        <span 
          ref={logContainerRef} 
          id={styles.log}
          >{log.join(' ')}</span>
      </div>
    </div>
  );
}