import {
  SCREEN_SIZE,
  THRUST_LEFT,
  THRUST_RIGHT,
  STOP,
  MOVE_LEFT,
  MOVE_RIGHT
} from '../actions';

function ship(state = {}, action) {
  switch(action.type) {
    case SCREEN_SIZE:
      const x = Math.round(0.1 * Math.round(action.payload.h));
      const y = Math.round(0.5 * Math.round(action.payload.w));
      return Object.assign({}, state, { x, y });
    case THRUST_LEFT:
      return Object.assign({}, state, { xVelocity: -1 });
    case THRUST_RIGHT:
      return Object.assign({}, state, { xVelocity: +1 });
    case STOP:
      return Object.assign({}, state, { xVelocity: 0 });
    case MOVE_LEFT:
      return Object.assign({}, state, { x: state.x - 8 });
    case MOVE_RIGHT:
      return Object.assign({}, state, { x: state.x + 8 });
    default:
      return state;
  }
};

export default ship;

