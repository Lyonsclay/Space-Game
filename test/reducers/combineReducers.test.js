import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { left, right, fire, addUFO } from '../../app/actions';

describe('ship reducer', () => {
  let store;

  beforeEach(() => {
    const initialState = { ship: { x: 400, y: 800 } };

    store = createStore(rootReducer, initialState);
  });

  it('moves left', () => {
    store.dispatch(left());

    const stateAfter = store.getState();

    expect(stateAfter.ship).toEqual({ x: 399, y: 800 });
  });
});

describe('bullets reducer', () => {
  let store;

  beforeEach(() => {
    const initialState = { bullets: [] };

    store = createStore(rootReducer, initialState);
  });

  it('fires', () => {
    store.dispatch(fire(10, 10));

    const stateAfter = store.getState();

    expect(stateAfter.bullets).toEqual([{ x: 10, y: 10 }]);
  });
});
