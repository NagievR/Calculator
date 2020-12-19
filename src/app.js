import { React, useState } from 'react';

import './app.css';
import { Screen } from './components/screen/screen.js';
import { Keyboard } from './components/keyboard/keyboard.js';
import { Journal } from './components/journal/journal.js';
import { InputHandlerProvider } from "./logic/input-handler.js";

export function App() {
  const [journalDisplaying, setJournalDisplaying] = useState(false);

  return (
    <InputHandlerProvider>
      <div id='app'>
        <Screen setJournalDisplaying={setJournalDisplaying} />
        <Keyboard />
        <Journal display={journalDisplaying} />
      </div>
    </InputHandlerProvider>
  );
}