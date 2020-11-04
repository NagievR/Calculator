import React from 'react';
import './app.css';

import {Screen} from './components/screen/screen.js';
import {NumberPad} from './components/number-pad/number-pad.js';


export function App() {
  return (
    <div id='app'>
      <Screen />
      <NumberPad />
    </div>
  )
}