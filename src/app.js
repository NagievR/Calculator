import { React, useState } from 'react';

import './app.css';
import { Screen } from './components/screen/screen.js';
import { Keyboard } from './components/keyboard/keyboard.js';
import { Journal } from './components/journal/journal.js';

// providers
import { StoreProvider } from "./logic/store.js";
import { HandlersCompositionProvider } from "./logic/handlers-composition.js";
import { DefineInputTypeProvider } from "./logic/define-input-type.js";

export function App() {
  const [journalDisplaying, setJournalDisplaying] = useState(false);

  return (
    <StoreProvider>
      <HandlersCompositionProvider>
        <DefineInputTypeProvider>

          <div id='app'>
            <Screen setJournalDisplaying={setJournalDisplaying} />
            <Keyboard />
            <Journal display={journalDisplaying} />
          </div>
          
        </DefineInputTypeProvider>
      </HandlersCompositionProvider>
    </StoreProvider>
  );
}