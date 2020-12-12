import {React, useState, useEffect} from 'react';

import './screen.css';
import {JournalSwitcher} from './journal-switcher/journal-switcher.js';
import {Output} from './output/output.js';

export function Screen({toggleJournal}) {
  const [switcherDisplaying, setSwitcherDisplaying] = useState(true);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setSwitcherDisplaying(prev => !prev);
  //     console.log(123)
  //   }, 2000);

  //   return () => clearInterval(timerId);
  // });

  return (
    <div id='screen'>
      <JournalSwitcher displaying={switcherDisplaying} toggleJournal={toggleJournal} />
      <Output setSwitcherDisplaying={setSwitcherDisplaying} />
    </div>
  );
}