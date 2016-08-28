import React from 'react';
import { render } from 'react-dom';
import { ReactDOMServer } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Game from './components/Game';
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

const update = () => {
  const state = store.getState();

  if (state.ship.xVelocity === -1) {
    store.dispatch(left());
  } else if (state.ship.xVelocity === 1) {
    store.dispatch(right());
  }
};

const devTools = () => {

};

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// store.subscribe(update);
import { Animation } from 'react-web-animation';

render(<GamePlay />, document.getElementById('app'));
// render(<Ship />, document.getElementById('app'));
