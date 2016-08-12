import expect from 'expect';
import { createStore } from 'redux';
import shipReducer from '../../app/reducers/ship';
import { left, right } from '../../app/actions';

describe('bullets', () => {
  let store;

  beforeEach(() => {
    const initialState = { x: 400, y: 800 };

    store = createStore(shipReducer, initialState);
  });

  it('moves left', () => {
    store.dispatch(left());

    const stateAfter = store.getState();

    expect(stateAfter).toEqual({ x: 399, y: 800 });
  });

  it('moves right', () => {
    store.dispatch(right());

    const stateAfter = store.getState();

    expect(stateAfter).toEqual({ x: 401, y: 800 });
  });
});
