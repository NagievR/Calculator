import React from 'react';
import styles from './output.module.css';

import { OperationsLog } from './operations-log.js'; 
import { Result } from './result.js';

export function Output({ setSwitcherDisplaying, maxDisplayWidth }) {
  return (
    <div id={styles.output_container}>
      <OperationsLog 
        setSwitcherDisplaying={setSwitcherDisplaying}
        maxDisplayWidth={maxDisplayWidth}
      />
      <Result />
    </div>
  );
}