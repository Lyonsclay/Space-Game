import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Game from './components/Game';
import SingleApp from './components/SingleApp.jsx';
import {
  left,
  right
} from './actions';

const GamePlay = () => {
  return < Provider store={store}><Game /></Provider>;
};

const initialState = {
  ship: {
    xMax: 0,
    yMax: 0,
    xVelocity: 0,
    yVelocity: 0,
    x: 0,
    y: 0,
    moving: false
  }
};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// store.subscribe(update);

// render(<GamePlay />, document.getElementById('app'));
render(<SingleApp />, document.getElementById('app'));
