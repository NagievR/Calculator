import {React, useState} from 'react';

import './journal.css';

export function Journal({ journalToggle }) {
  const show = '▲';
  const hide = '×';
  const [iconToShow, setIcon] = useState(show);

  function toggle(e) {
    const icn = e.target.textContent === show ? hide : show;
    setIcon(icn);
    journalToggle(prev => !prev);
  }

  return (
    <button id='toggle-btn' onClick={toggle}>{iconToShow}</button>
  );
}