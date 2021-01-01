import { React, useRef } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const { currentNumber, currentResult } = useStore();
  const resultRef = useRef();

  function defineOutput() {
    return (currentResult !== '' && formateOutputNumber(currentResult)) 
      || formateOutputNumber(currentNumber) 
      || '0';
  }

  return (
    <Textfit 
      mode="single"
      max={80}>
      <div className={`output-elem-wrap`}>   
        <span ref={resultRef} id='result'>{defineOutput()}</span>
      </div>
    </Textfit>
  );
}

function formateOutputNumber(num, splitBy = '.') {
  const number = String(num);
  const [int, float] = number.split(splitBy);
  const intReadable = Number(int).toLocaleString();
  const formatted = `${intReadable}${splitBy}${float}`;
  
  return number.includes(splitBy) ? formatted : intReadable;
}