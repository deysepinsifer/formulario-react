import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App/index.js';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const store = createStore( applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById('root')
);


