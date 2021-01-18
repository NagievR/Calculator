import React, { useState, useRef } from 'react';
import styles from './screen.module.css';

import { JournalSwitcher } from './journal-switcher/journal-switcher.js';
import { Output } from './output/output.js';

export function Screen({ setJournalDisplaying }) {
  const [switcherDisplaying, setSwitcherDisplaying] = useState(false);
  const displayRef = useRef();
  return (
    <div ref={displayRef} id={styles.screen}>
      <JournalSwitcher 
        switcherDisplaying={switcherDisplaying}
        setJournalDisplaying={setJournalDisplaying}  
      />
      <Output 
        setSwitcherDisplaying={setSwitcherDisplaying}
        maxDisplayWidth={displayRef.current && displayRef.current.clientWidth}
      />
    </div>
  );
}