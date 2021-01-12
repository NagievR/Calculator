import { React, useRef } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const numberContainerRef = useRef();
  const {
    separateFloatBy,
    currentNumber, 
    interimResult, 
    result, 
  } = useStore();

  // ======== testing
  console.clear();
  console.log(`currentNumber: ${currentNumber}\ninterimResult:${interimResult}\nresult:${result}\n***********`);
  if (typeof currentNumber !== 'string' 
    || typeof result !== 'string'
    || typeof result !== 'string' 
  ) {
      alert('Error');
  }
  // ================

  function defineOutputSource() {
    if (interimResult) {
      let floatCorrected = setVisibleFloatLength(interimResult, 4);
      return formate(floatCorrected, separateFloatBy);

    } else if (result) {
      let floatCorrected = setVisibleFloatLength(result);
      return formate(floatCorrected, separateFloatBy);

    } else if (currentNumber) {
      return formate(currentNumber, separateFloatBy);

    } else {
      return '0';
    }
  }

  return (
    <Textfit 
      mode="single"
      max={80}>
      <div className={`output-elem-wrap`}>   
        <span 
          ref={numberContainerRef} 
          className={currentNumber || result ? '' : 'intermediate-res'} 
          id='result'>
          {defineOutputSource()}
        </span>
      </div> 
    </Textfit>
  );
}

function formate(num, separateFloatBy) { 
  const numberStringified = String(num);
  const [int, float] = numberStringified.split(separateFloatBy);
  const intReadable = Number(int).toLocaleString();
  const formatted = `${intReadable}${separateFloatBy}${float}`;
  return numberStringified.includes(separateFloatBy) ? formatted : intReadable;
}

function setVisibleFloatLength(num, maxFloatLength = 4) {
  num = String(num);

  if (Number.isInteger(Number(num))) {
    return num;
  }

  let numFixed = Number(num).toFixed(maxFloatLength);
  for (let i = numFixed.length-1; i > 2; i--) {
    if (numFixed[i] !== '0') {
      break;
    }
    numFixed = numFixed.slice(0, i)
  }

  return numFixed;
}