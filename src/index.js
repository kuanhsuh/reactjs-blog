import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import promise from 'redux-promise';

import App from './App'

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
