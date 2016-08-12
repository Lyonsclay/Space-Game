import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { fire, addUFO } from '../../app/actions';

describe('bullets', () => {
  let store;

  beforeEach(() => {
    const initialState = { bullets: [] };

    store = createStore(rootReducer, initialState);
  });

  it('adds a bullet', () => {
    store.dispatch(fire(10, 100));

    const stateAfter = store.getState();

    expect(stateAfter.bullets).toEqual([{ x: 10, y: 100 }]);
  });
});
