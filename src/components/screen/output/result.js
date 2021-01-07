import { React, useRef } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const resultRef = useRef();
  const { currentNumber, currentResult } = useStore();

  // console.log(`currentNumber: ${currentNumber}\ncurrentResult:${currentResult}\n***********`);

  let className = 'intermediate-res';
  if (currentNumber !== '') {
    className = '';
  }

  function defineOutputSource() {
    if (currentResult !== '') {
      let floatCorrected = setVisibleFloatLength(currentResult, 4);
      return formateUserInput(floatCorrected);
    } else if (currentNumber !== '') {
      let floatCorrected = setVisibleFloatLength(currentNumber);
      return formateUserInput(floatCorrected);
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
          ref={resultRef} 
          className={className} 
          id='result'>
          {defineOutputSource()}
        </span>
      </div>
    </Textfit>
  );
}

function formateUserInput(num, splitBy = '.') {
  const numberStringified = String(num);
  const [int, float] = numberStringified.split(splitBy);
  const intReadable = Number(int).toLocaleString();
  const formatted = `${intReadable}${splitBy}${float}`;
  return numberStringified.includes(splitBy) ? formatted : intReadable;
}

function setVisibleFloatLength(num, maxFloatLength = 8) {
  num = String(num);
  if (Number.isInteger(Number(num))) {
    return num;
  }
  let numFixed = Number(num).toFixed(maxFloatLength);
  for (let i = numFixed.length-1; i > 0; i--) {
    if (numFixed[i] !== '0') {
      break;
    }
    numFixed = numFixed.slice(0, i)
  }
  return numFixed;
}