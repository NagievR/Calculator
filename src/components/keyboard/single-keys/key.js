import React from 'react';
import './keys.css';

export function Key(props) {
  return (
    <div onClick={() => console.log(props.value)} className={props.className}>
      {props.value}
    </div>
  );
} 