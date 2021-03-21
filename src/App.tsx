import React from 'react';
import './App.css';

import Number from './Number';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './Store/'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers())

function App() {
  return (
    <Provider store={store} >
      <Number/>
    </Provider>
  );
}

export default App;
