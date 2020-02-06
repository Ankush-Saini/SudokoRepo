import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
import Sudoko from './Sudoko';



ReactDOM.render(<Sudoko />, document.getElementById('root'));
