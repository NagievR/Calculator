import React from 'react';
import './number-pad.css';

import {KeysRow} from './keys-row/keys-row.js'



export function NumberPad() {
  return ( 
    <div id='number-pad'>
      <KeysRow />
      <KeysRow />
      <KeysRow />
      <KeysRow />
      <KeysRow />
    </div>
  )
}