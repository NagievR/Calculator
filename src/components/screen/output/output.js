import React from 'react';
import styles from './output.module.css';

import { OperationsLog } from './operations-log.js'; 
import { Result } from './result.js';

export function Output({ setSwitcherDisplaying }) {
  const displayWidth = 315;

  return (
    <div id={styles.output_container}>
      <OperationsLog 
        displayWidth={displayWidth}
        setSwitcherDisplaying={setSwitcherDisplaying} 
      />
      <Result 
        displayWidth={displayWidth} 
      />
    </div>
  );
}