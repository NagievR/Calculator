import React from 'react';

import './output.css';
import {OperationsLog} from './operations-log.js'; 
import {Result} from './result.js';

export function Output() {
  return (
    <div id='container'>
      <OperationsLog />
      <Result />
    </div>
  );
}