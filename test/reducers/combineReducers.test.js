import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { thrustLeft, thrustRight, fire, addUFO } from '../../app/actions';

describe('rootReducer ship', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      ship: {
        xVelocity: 0
      }
    };

    store = createStore(rootReducer, initialState);
  });

  it('thrustLeft', () => {
    store.dispatch(thrustLeft());

    const stateAfter = store.getState();

    expect(stateAfter.ship).toEqual({xVelocity: -1});
  });
});

describe('rootReducer bullets', () => {
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
