// !important! This is the index.js file for the demo site.
// Do not import this.
// Import the top-level index.js or perseus-configured.js
// instead!

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
