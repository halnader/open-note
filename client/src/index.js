import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  , document.getElementById('root'));
