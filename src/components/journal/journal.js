import {React} from 'react';

import './journal.css';

export function Journal({ display }) {

  function toggleDisplaying() {
    const hide = '-420px';
    const show = '0';
    return display ? {bottom: show} : {bottom: hide};
  }

  return (
    <div id='journal-container' style={toggleDisplaying()}>
      <div id='journal'>
        7*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+6
      </div>
    </div>
  );
}