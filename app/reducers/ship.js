import { LEFT, RIGHT } from '../actions';

function ship(state = {}, action) {
  switch(action.type) {
    case LEFT:
      console.log(state, action);
      return Object.assign({}, state, { x: --state.x, y: state.y });
    case RIGHT:
      return Object.assign({}, state, { x: ++state.x, y: state.y });
    default:
      return state;
  }
};

export default ship;

