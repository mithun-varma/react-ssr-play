import React from 'react';
import { hydrate } from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import '../scss/main.scss';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";


console.log(window.INITIAL_STATE)
var store = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(reduxThunk));
delete window.INITIAL_STATE; // eslint-disable-line no-underscore-dangle
hydrate(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector('#app')
);