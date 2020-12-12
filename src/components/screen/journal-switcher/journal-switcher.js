import {React, useState} from 'react';

import './journal-switcher.css';

export function JournalSwitcher({ switcherDisplaying, setJournalDisplaying }) {
  const show = '▲';
  const hide = '×';
  const [iconToShow, setIconToShow] = useState(show);

  function toggleIcon(e) {
    setIconToShow( e.target.textContent === show ? hide : show );
    setJournalDisplaying(prev => !prev);
  }

  function toggleDisplaying() {
    const hide = '-30px';
    const show = '0';
    return switcherDisplaying ? {top: show} : {top: hide};
  }

  return (
    <div id='switcher-btn-wrap'>
      <button id='switcher-btn' style={toggleDisplaying()} onClick={toggleIcon}>
        {iconToShow}
      </button>
    </div>
  );
}