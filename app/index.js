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
    xVelocity: 0,
    yVelocity: 0,
    x: 600,
    y: 600
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


const store = createStore(rootReducer, initialState);

// store.subscribe(update);

render(<GamePlay />, document.getElementById('app'));

