import { React, useRef } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const { currentNumber } = useStore();
  const resRef = useRef();

  return (
    <Textfit 
      mode="single"
      max={80} 
      min={30}>
      <div className={`output-elem-wrap`}>   
        <span ref={resRef} id='result'>
          {formateOutputValue(currentNumber) || '0'}
        </span>
      </div>
    </Textfit>
  );
}

function formateOutputValue(n) {
  return Number(n).toLocaleString();
}