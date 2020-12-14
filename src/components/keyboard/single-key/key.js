import React from 'react';

import './key.css';
import { useValueHandler } from "../../../logic/value-handler.js";

export function Key ({ value, className }) {
  const { handleValue } = useValueHandler();

  return (
    <div onClick={() => handleValue(value)} className={className}>
      {value}
    </div>
  );
}