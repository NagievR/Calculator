import React from 'react';
import styles from './key.module.css';

import { useDefineInputType } from "../../../logic/providers/define-input-type.js";

export function Key ({ value, className }) {
  const { defineInputType } = useDefineInputType();

  return (
    <div 
      onClick={() => defineInputType(value)} 
      className={`${styles.key} ${styles[className] ?? ''}`}
    >{value}
    </div>
  );
}