import { ADD_UFO } from '../actions';

function ufos(state = [], action) {
  switch(action.type) {
    case ADD_UFO:
      return Object.assign([], state,
        [...state,
         { x: action.payload.x, y: action.payload.y }
        ]
      );
    default:
      return state;
  }
};

export default ufos;
