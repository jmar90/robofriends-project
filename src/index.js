import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App will be the parent of all components
import * as serviceWorker from './serviceWorker';
import 'tachyons';  // Tachyons is a styling package (like Bootstrap)

ReactDOM.render(<App />, document.getElementById('root')
);

serviceWorker.register();
