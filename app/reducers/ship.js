import {
  SCREEN_SIZE,
  THRUST_LEFT,
  THRUST_RIGHT,
  STOP,
  SHIP_STOPPED,
  MOVE_LEFT,
  MOVE_RIGHT
} from '../actions';

function ship(state = {}, action) {
  switch (action.type) {
  case SCREEN_SIZE:
    const xMax = action.payload.w;
    const x = Math.round(Math.round(0.5 * xMax));
    const yMax = action.payload.h;
    const y = Math.round(Math.round(0.5 * yMax));
    console.log('x-s and y-s : ', xMax, yMax, x, y);

    return Object.assign({}, state, {
      xMax,
      yMax,
      x,
      y
    });
  case THRUST_LEFT:
    return Object.assign({}, state, {
      xVelocity: -1
    });
  case THRUST_RIGHT:
    return Object.assign({}, state, {
      xVelocity: +1
    });
  case STOP:
    return Object.assign({}, state, {
      xVelocity: 0
    });
  case SHIP_STOPPED:
    return Object.assign({}, state, {
      moving: false
    });
  case MOVE_LEFT:
    return Object.assign({}, state, {
      moving: true,
      x: state.x - 20
    });
  case MOVE_RIGHT:
    return Object.assign({}, state, {
      moving: true,
      x: state.x + 20
    });
  default:
    return state;
  }
};

export default ship;
