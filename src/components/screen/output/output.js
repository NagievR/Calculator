import {React} from 'react';

import './output.css';
import {OperationsLog} from './operations-log.js'; 
import {Result} from './result.js';

export function Output({ setSwitcherDisplaying }) {
  const displayWidth = 315;

  return (
    <div id='output-container'>
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