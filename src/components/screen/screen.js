import { React, useState } from 'react';
import styles from './screen.module.css';

import { JournalSwitcher } from './journal-switcher/journal-switcher.js';
import { Output } from './output/output.js';

export function Screen({ setJournalDisplaying }) {
  const [switcherDisplaying, setSwitcherDisplaying] = useState(false);

  return (
    <div id={styles.screen}>
      <JournalSwitcher 
        switcherDisplaying={switcherDisplaying}
        setJournalDisplaying={setJournalDisplaying}  
      />
      <Output 
        setSwitcherDisplaying={setSwitcherDisplaying}
      />
    </div>
  );
}