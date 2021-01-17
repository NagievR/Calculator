import React from 'react';
import styles from './journal.module.css';

import { useStore } from "../../logic/providers/store.js";
import { HistoryBlock } from "./history-block.js";  

export function Journal({ display }) {
  const { 
    log,
    history,
    setHistory,
  } = useStore();

  function toggleDisplaying() {
    const hide = '-420px';
    const show = '0';
    return display ? {bottom: show} : {bottom: hide};
  }

  function addHistoryBlocks() {
    const reversed = history.slice(0).reverse();
    return reversed.map((it, idx) => {
      return <HistoryBlock data={it} key={idx + it[1]} />
    }); 
  }

  const handleClearClick = () => setHistory([]);

  return (
    <div id={styles.journal} style={toggleDisplaying()}>
      <div id={styles.main_container}>

        <div>{log.join(' ')}</div>
        <hr color="#ebebeb" />
        <div id={styles.history_header}>
          <span>History</span>
          {!!history.length &&
            <button onClick={handleClearClick}>CLEAR HISTORY</button>}
        </div>

        <ul id={styles.history}>{addHistoryBlocks()}</ul>
      </div>
    </div>
  );
}