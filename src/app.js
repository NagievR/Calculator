import React, { useState, useEffect } from 'react';

import './app.css';
import { Screen } from './components/screen/screen.js';
import { Keyboard } from './components/keyboard/keyboard.js';
import { Journal } from './components/journal/journal.js';

import { handleKeyboardEvent } from "./logic/keyboard-events.js";
import { useDefineInputType } from "./logic/providers/define-input-type.js";

export function App() {
  const [journalDisplaying, setJournalDisplaying] = useState(false);
  const [currentKey, setCurrentKey] = useState(null);
  const { defineInputType } = useDefineInputType();

  useEffect(() => {
    const handler = e => setCurrentKey(e.key);
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const key = handleKeyboardEvent(currentKey);
    if (key) {
      defineInputType(key);
      setCurrentKey(null);
    } // eslint-disable-next-line
  }, [currentKey]);

  return (
    <div id='app'>
      <Screen setJournalDisplaying={setJournalDisplaying} />
      <Keyboard />
      <Journal display={journalDisplaying} />
    </div>     
  );
}