import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './reducers';

import Root from './components/Root/Root';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(
  appReducer,
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
