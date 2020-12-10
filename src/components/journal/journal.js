import {React, useState} from 'react';

import './journal.css';

export function Journal({display}) {
  // const [display, setDisplay] = useState(false);

  // function toggle() {}
console.log(display)
  return (
    <div id='journal-container' style={display ? {bottom: '0px'} : {bottom: '-420px'}}>
      <div id='journal'>
      7*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*87+26+6+87*8787
      </div>
    </div>
  );
}