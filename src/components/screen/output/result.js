import React, { useRef } from 'react';
import styles from './output.module.css';

import { Textfit } from 'react-textfit';
import { useStore } from "../../../logic/providers/store.js";

export function Result() {
  const numberContainerRef = useRef();
  const {
    separateFloatBy,
    currentNumber, 
    interimResult, 
    result, 
  } = useStore();

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

  function isInterimResultCheck() {
    return (currentNumber || result) ? '' : styles.intermediate_res;
  };

  return (
    <Textfit 
      mode="single"
      max={80}>
      <div className={styles.output_elem_wrap}>   
        <span 
          ref={numberContainerRef} 
          className={isInterimResultCheck()} 
          id={styles.result}>
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