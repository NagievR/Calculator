import { React, useRef } from 'react';
import { Textfit } from 'react-textfit';

import './output.css';
import { useStore } from "../../../logic/store.js";

export function Result() {
  const resultRef = useRef();
  const { currentNumber, currentResult } = useStore();
  const result = setVisibleFloatLength(currentResult, 4);

  function defineOutputSource() {
    if (result !== '') {
      return formateUserInput(result);
    } else if (currentNumber !== '') {
      return formateUserInput(currentNumber);
    } else {
      return '0';
    }
  }

  return (
    <Textfit 
      mode="single"
      max={80}>
      <div className={`output-elem-wrap`}>   
        <span ref={resultRef} id='result'>{defineOutputSource()}</span>
      </div>
    </Textfit>
  );
}

function formateUserInput(num, splitBy = '.') {
  const number = String(num);
  const [int, float] = number.split(splitBy);
  const intReadable = Number(int).toLocaleString();
  const formatted = `${intReadable}${splitBy}${float}`;
  return number.includes(splitBy) ? formatted : intReadable;
}

function setVisibleFloatLength(num, maxFloatLength = 2) {
  if (Number.isInteger(Number(num))) {
    return num;
  }
  let numFixed = num.toFixed(maxFloatLength);
  for (let i = numFixed.length-1; i > 0; i--) {
    if (numFixed[i] !== '0') {
      break;
    }
    numFixed = numFixed.slice(0, i)
  }
  return numFixed;
}