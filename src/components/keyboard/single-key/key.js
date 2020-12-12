import React from 'react';
import './key.css';

export function Key(props) {
  return (
    <div onClick={() => console.log(props.value)} className={props.className}>
      {props.value}
    </div>
  );
} 