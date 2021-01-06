import {React, useEffect, useState} from 'react';

import './journal-switcher.css';

export function JournalSwitcher({ switcherDisplaying, setJournalDisplaying }) {
  const showIcon = '▲';
  const hideIcon = '×';
  const [iconToShow, setIconToShow] = useState(showIcon);

  useEffect(() => {
    if (!switcherDisplaying) {
      setIconToShow(showIcon);
      setJournalDisplaying(false);
    } 
  }, [setJournalDisplaying, switcherDisplaying]);

  function toggleIcon(e) {
    setIconToShow( e.target.textContent === showIcon ? hideIcon : showIcon );
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