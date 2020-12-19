import React from 'react';

import './key.css';
import { useInputHandler } from "../../../logic/input-handler.js";

export function Key ({ value, className }) {
  const { handleInput } = useInputHandler();

  return (
    <div onClick={() => handleInput(value)} className={className}>
      {value}
    </div>
  );
}