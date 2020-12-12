import {React, useState} from 'react';

import './journal-switcher.css';

export function JournalSwitcher({ displaying, toggleJournal }) {
  const show = '▲';
  const hide = '×';
  const [iconToShow, setIcon] = useState(show);

  function toggleIcon(e) {
    setIcon( e.target.textContent === show ? hide : show );
    // toggleJournal(prev => !prev);
  }

  function toggleDisplaying() {
    return displaying ? {top: 0} : {top: '-30px'};
  }

  return (
    <div id='switcher-btn-wrap'>
      <button id='switcher-btn' style={toggleDisplaying()} onClick={toggleIcon}>
        {iconToShow}
      </button>
    </div>
  );
}