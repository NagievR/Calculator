import React, { useEffect, useState } from 'react';
import styles from './journal-switcher.module.css';

export function JournalSwitcher({ switcherDisplaying, setJournalDisplaying }) {
  const iconOpen = '▲';
  const iconHide = '×';
  const [iconToShow, setIconToShow] = useState(iconOpen);

  useEffect(() => {
    if (!switcherDisplaying) {
      setIconToShow(iconOpen);
      setJournalDisplaying(false);
    } 
  }, [setJournalDisplaying, switcherDisplaying]);

  function toggleIcon() { 
    setIconToShow( iconToShow === iconOpen ? iconHide : iconOpen );
    setJournalDisplaying(prev => !prev);
  }

  function toggleDisplaying() {
    const hide = '-30px';
    const show = '0';
    return switcherDisplaying ? {top: show} : {top: hide};
  }

  // handle journal switching from keyboard
  const [switchJournal, setSwitchJournal] = useState(false);

  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowRight' || e.keyCode === 70) {
        setSwitchJournal(prev => !prev);
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (switcherDisplaying) {
      toggleIcon();
    } // eslint-disable-next-line
  }, [switchJournal]);

  return (
    <div id={styles.wrapper}>
      <button 
        id={styles.switcher_btn}
        style={toggleDisplaying()}
        onClick={toggleIcon}
        onFocus={e => e.target.blur()}
        >{iconToShow}</button>
    </div>
  );
}