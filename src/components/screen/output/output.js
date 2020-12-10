import {React} from 'react';

import './output.css';
import {OperationsLog} from './operations-log.js'; 
import {Result} from './result.js';

export function Output({setJournalToggle}) {
  const displayWidth = 315;

  return (
    <div id='output-container'>
      <OperationsLog setJournalToggle={setJournalToggle} displayWidth={displayWidth} />
      <Result setJournalToggle={setJournalToggle} displayWidth={displayWidth} />
    </div>
  );
}