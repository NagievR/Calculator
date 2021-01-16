import React from 'react';
import styles from './keyboard.module.css';

import { KeysRow } from './keys-row.js'
import { Key } from './single-key/key.js'

export function Keyboard() {
  return ( 
    <div id={styles.keyboard}>
      <KeysRow>
        <Key value={'c'} className={'double_key'} />
        <Key value={'⌫'} className={'delete'}  />
        <Key value={'÷'} className={'math_operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={'7'} />
        <Key value={'8'} />       
        <Key value={'9'} />
        <Key value={'×'} className={'math_operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={'4'} />
        <Key value={'5'} />       
        <Key value={'6'} />
        <Key value={'−'} className={'math_operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={'1'} />
        <Key value={'2'} />       
        <Key value={'3'} />
        <Key value={'+'} className={'math_operator'} />
      </KeysRow>
      <KeysRow>
        <Key value={'±'} />
        <Key value={'0'} />       
        <Key value={'.'} />
        <Key value={'='} className={'math_operator'} />
      </KeysRow>
    </div>
  );
}