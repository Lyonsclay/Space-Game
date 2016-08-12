import React from 'react';
import { render } from 'react-dom';
import { ReactDOMServer } from 'react-dom/server';
import { createStore } from 'redux';
import { rootReducer, initialState } from './reducers/rootReducer.js';
import Game from './components/Game';

// const store = createStore(rootReducer, initialState);
render(<p>Wrong Stuff</p>, document.getElementById('app'));

