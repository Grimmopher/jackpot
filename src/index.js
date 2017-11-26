import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import queryString from 'query-string';

const parsed = queryString.parse(window.location.search);
let playerNumbers = parsed.play.length == 6 ? parsed.play.map(n => parseInt(n)) : [1,2,3,4,5,6];

ReactDOM.render(<App playerNumbers={playerNumbers}/>, document.getElementById('root'));

// jackpot
//ReactDOM.render(<App playerNumbers={[35, 37, 46, 51, 61, 13]}/>, document.getElementById('root'));

registerServiceWorker();