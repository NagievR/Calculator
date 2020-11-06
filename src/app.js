import React from 'react';

import './app.css';
import {Screen} from './components/screen/screen.js';
import {Keyboard} from './components/keyboard/keyboard.js';


export function App() {
  return (
    <div id='app'>
      <Screen />
      <Keyboard />
    </div>
  )
}