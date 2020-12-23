import React from 'react';

import './key.css';
import { useDefineInputType } from "../../../logic/define-input-type.js";

export function Key ({ value, className }) {
  const { defineInputType } = useDefineInputType();

  return (
    <div onClick={() => defineInputType(value)} className={className}>
      {value}
    </div>
  );
}