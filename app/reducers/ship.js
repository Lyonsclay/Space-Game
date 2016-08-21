import {
  THRUST_LEFT,
  THRUST_RIGHT
} from '../actions';

function ship(state = {}, action) {
  switch(action.type) {
    case THRUST_LEFT:
    console.log('status ', state)
      return Object.assign(state, { xVelocity: -1 });
    case THRUST_RIGHT:
      return Object.assign(state, { xVelocity: +1 });
    default:
      return state;
  }
};

export default ship;

