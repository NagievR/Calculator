import React from 'react';
import {useState} from 'react';

import './journal-toggle.css';

export function JournalToggle() {
  const show = '▲';
  const hide = '×';
  const [iconToShow, setIcon] = useState(show);

  function toggle(e) {
    const icn = e.target.textContent === show ? hide : show;
    setIcon(icn);
  }

  return (
    <div id='journal-toggle-wrap' onClick={toggle}>
      <button id='toggle-btn'>{iconToShow}</button>
    </div>
  );
}