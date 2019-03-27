import React from 'react'
import ReactDOM from 'react-dom'

import { add } from './lib.rs'

console.log('Hello from tsx!');

ReactDOM.render(
  <p>Hellllo: {add(2, 4)}</p>,
  document.getElementById('root'),
);
