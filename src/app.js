import { React, useState } from 'react';

import './app.css';
import { Screen } from './components/screen/screen.js';
import { Keyboard } from './components/keyboard/keyboard.js';
import { Journal } from './components/journal/journal.js';
import { ValueHandlerProvider } from "./logic/value-handler.js";

export function App() {
  const [journalDisplaying, setJournalDisplaying] = useState(false);

  return (
    <ValueHandlerProvider>
      <div id='app'>
        <Screen setJournalDisplaying={setJournalDisplaying} />
        <Keyboard />
        <Journal display={journalDisplaying} />
      </div>
    </ValueHandlerProvider>
  );
}