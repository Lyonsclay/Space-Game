import { FIRE } from '../actions';

function bullets(state = [], action) {
  switch(action.type) {
    case FIRE:
      if (action.payload.x && action.payload.y) {  
        return Object.assign([], state, 
          [{x: action.payload.x, y: action.payload.y}]
        );
      } else {
        return state;
      }
    default:
      return state;
  };
};

export default bullets;
