import React from 'react'
import ReactDOM from 'react-dom'

import { add } from './../src/lib.rs'

console.log('Hello from tsx!');

ReactDOM.render(
  <p>Hellllo: {add(2, 2)}</p>,
  document.getElementById('root'),
);
