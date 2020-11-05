import React from 'react';

import './number-pad.css';
import {KeysRow} from './keys-row/keys-row.js'
import {Key} from './single-keys/key.js'
import {LongerKey} from './single-keys/longer-key.js'

export function NumberPad() {
  return ( 
    <div id='number-pad'>
      <KeysRow>
        <LongerKey value={'c'} className={'key double-key'} />
        <Key value={'⌫'} className={'key delete'}  />
        <Key value={'÷'} className={'key math-operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={7} className={'key'} />
        <Key value={8} className={'key'} />       
        <Key value={9} className={'key'} />
        <Key value={'×'} className={'key math-operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={4} className={'key'} />
        <Key value={5} className={'key'} />       
        <Key value={6} className={'key'} />
        <Key value={'−'} className={'key math-operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={1} className={'key'} />
        <Key value={2} className={'key'} />       
        <Key value={3} className={'key'} />
        <Key value={'+'} className={'key math-operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={'±'} className={'key'} />
        <Key value={0} className={'key'} />       
        <Key value={'.'} className={'key'} />
        <Key value={'='} className={'key math-operator'} />
      </KeysRow>
    </div>
  );
}