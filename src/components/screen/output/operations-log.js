import {React} from 'react';

import './output.css';

export function OperationsLog() {
  // const [isOversized, set] useState(false);

  function changeHandler(e) {
    console.dir(e.target);
  }

  return (
    <div className='log-margin'>
      <div className='output-elem-wrap oversized'>
        <span onClick={changeHandler} id='log'>98*87/71/4/4*-5+22+98-9*866-22+98-9-87+835-11</span>
      </div>
    </div>
  );
}