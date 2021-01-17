import React from 'react';
import styles from './journal.module.css';

export function HistoryBlock({ data }) {
  return (
    <li className={styles.history_block}>
      {data[0]}&nbsp;<span className={styles.result}>{data[1]}</span>
    </li>
  );
}