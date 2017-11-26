import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// jackpot
//ReactDOM.render(<App playerNumbers={[35, 37, 46, 51, 61, 13]}/>, document.getElementById('root'));

registerServiceWorker();