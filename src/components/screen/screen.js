import {React, useState} from 'react';

import './screen.css';
import {JournalToggle} from './journal-toggle/journal-toggle.js';
import {Output} from './output/output.js';

export function Screen({toggleJournal}) {
  const [displayBtn, setDisplayBtn] = useState(true);

  return (
    <div id='screen'>
      <div id='journal-toggle-wrap'>
        {displayBtn && <JournalToggle toggleJournal={toggleJournal} />}
      </div>
      <Output setJournalToggle={setDisplayBtn} />
    </div>
  );
}