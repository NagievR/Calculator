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
      return formate(interimResult, separateFloatBy);
    } else if (result) {
      return formate(result, separateFloatBy);
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