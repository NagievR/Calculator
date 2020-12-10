import {React, useState} from 'react';

import './journal-toggle.css';

export function JournalToggle({toggleJournal}) {
  const show = '▲';
  const hide = '×';
  const [iconToShow, setIcon] = useState(show);

  function toggle(e) {
    const icn = e.target.textContent === show ? hide : show;
    setIcon(icn);
    toggleJournal(prev => !prev);
  }

  return (
    <button id='toggle-btn' onClick={toggle}>{iconToShow}</button>
  );
}