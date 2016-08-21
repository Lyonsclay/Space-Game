import expect from 'expect';
import { createStore } from 'redux';
import ship from '../../app/reducers/ship';
import { thrustLeft, thrustRight } from '../../app/actions';

describe('ship reducer', () => {
  let store;

  beforeEach(() => {
    const initialState = {
       xVelocity: 0 
    };

    store = createStore(ship, initialState);
  });

  it('thrustLeft', () => {
    store.dispatch(thrustLeft());

    const stateAfter = store.getState();

    expect(stateAfter).toEqual({ xVelocity: -1 });
  });

  it('thrustRight', () => {
    store.dispatch(thrustRight());

    const stateAfter = store.getState();

    expect(stateAfter).toEqual({ xVelocity: +1 });
  });
});
