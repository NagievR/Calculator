import React from 'react';
import styles from './keyboard.module.css';

export function KeysRow({ children }) {
  return (
    <div className={styles.keys_row}>
      {children}
    </div>
  );
}