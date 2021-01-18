import React from 'react';
import styles from './journal.module.css';

export function HistoryBlock({ data }) {
  const [expression, result] = data;
  return (
    <li className={styles.history_block}>
      {expression}&nbsp;<span className={styles.result}>{result}</span>
    </li>
  );
}