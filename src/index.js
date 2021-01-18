import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';
import { App } from './app.js';

// providers
import { StoreProvider } from "./logic/providers/store.js";
import { HandlersCompositionProvider } from "./logic/providers/handlers-composition.js";
import { DefineInputTypeProvider } from "./logic/providers/define-input-type.js";

ReactDOM.render(
  <StoreProvider>
    <HandlersCompositionProvider>
      <DefineInputTypeProvider>
        <App />
      </DefineInputTypeProvider>
    </HandlersCompositionProvider>
  </StoreProvider>,

  document.getElementById('root')
);