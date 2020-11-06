import React from 'react';

import './screen.css';
import {JournalToggle} from './journal-toggle/journal-toggle.js';

export function Screen() {
  return (
    <div id='screen'>
      <JournalToggle />
    </div>
  );
}