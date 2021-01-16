import React, { useState, useEffect } from 'react';
import styles from './app.module.css';

import { Screen } from './components/screen/screen.js';
import { Keyboard } from './components/keyboard/keyboard.js';
import { Journal } from './components/journal/journal.js';

import { handleKeyboardEvent } from "./logic/adapt-keyboard-events.js";
import { useDefineInputType } from "./logic/providers/define-input-type.js";

export function App() {
  const [journalDisplaying, setJournalDisplaying] = useState(false);
  
  // generate and handle events from the keyboard
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
    <div id={styles.app}>
      <Screen setJournalDisplaying={setJournalDisplaying} />
      <Keyboard />
      <Journal display={journalDisplaying} />
    </div>     
  );
}