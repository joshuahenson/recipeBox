import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {compose, createStore} from 'redux';
import persistState from 'redux-localstorage'
import App from './components/app';
import reducers from './reducers';

const createPersistentStore = compose(
  persistState()
)(createStore)

ReactDOM.render(
  <Provider store={createPersistentStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
