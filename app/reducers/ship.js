import {
  LEFT,
  RIGHT,
  MOVE_LEFT,
  MOVE_RIGHT
} from '../actions';

function ship(state = {}, action) {
  switch(action.type) {
    case LEFT:
      console.log(state);
      return Object.assign({}, state, { x: state.x + state.xVelocity * 10, y: state.y });
    case RIGHT:
      console.log(state)
      return Object.assign({}, state, { x: ++state.x, y: state.y });
    case MOVE_LEFT:
      return Object.assign({}, state, { xVelocity: -1 });
    case MOVE_RIGHT:
      return Object.assign({}, state, { xVelocity: +1 });
    default:
      return state;
  }
};

export default ship;

