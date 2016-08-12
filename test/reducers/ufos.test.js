import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { addUFO } from '../../app/actions';

describe('ufos', () => {
  let store;

  beforeEach(() => {
    const initialState = { ufos: [] };

    store = createStore(rootReducer, initialState);
  });

  it('adds a ufo', () => {
    store.dispatch(addUFO(400, 800));

    const stateAfter = store.getState();

    expect(stateAfter.ufos).toEqual([{ x: 400, y: 800 }]);
  });
});
