import {React, useState} from 'react';

import './screen.css';
import {JournalSwitcher} from './journal-switcher/journal-switcher.js';
import {Output} from './output/output.js';
import { useValueHandler } from "../../logic/value-handler.js";


export function Screen({ setJournalDisplaying }) {
  const [switcherDisplaying, setSwitcherDisplaying] = useState(false);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setSwitcherDisplaying(prev => !prev);
  //     console.log(123)
  //   }, 2000);

  //   return () => clearInterval(timerId);
  // });

  const c = useValueHandler();
  console.log(c);

  return (
    <div id='screen'>
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