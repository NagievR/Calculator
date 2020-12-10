import {React, useState} from 'react';

import './app.css';
import {Screen} from './components/screen/screen.js';
import {Keyboard} from './components/keyboard/keyboard.js';
import {Journal} from './components/journal/journal.js';


export function App() {
  const [toggleJournal, setToggleJournal] = useState(false);

  return (
    <div id='app'>
      <Screen toggleJournal={setToggleJournal} />
      <Keyboard />
      <Journal display={toggleJournal} />
    </div>
  )
}