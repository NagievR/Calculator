import React from 'react';
import styles from './journal.module.css';

import { useStore } from "../../logic/providers/store.js";

export function Journal({ display }) {
  const { log } = useStore();

  function toggleDisplaying() {
    const hide = '-420px';
    const show = '0';
    return display ? {bottom: show} : {bottom: hide};
  }

  return (
    <div id={styles.container} style={toggleDisplaying()}>
      <div id={styles.journal}>{log.join(' ')} </div>
    </div>
  );
}