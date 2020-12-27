import { React } from 'react';

import './journal.css';
import { useStore } from "../../logic/store.js";

export function Journal({ display }) {
  const { log } = useStore();
  const logReversed = log.slice().reverse().join(' ');

  function toggleDisplaying() {
    const hide = '-420px';
    const show = '0';
    return display ? {bottom: show} : {bottom: hide};
  }

  return (
    <div id='journal-container' style={toggleDisplaying()}>
      <div id='journal'>{logReversed} </div>
    </div>
  );
}