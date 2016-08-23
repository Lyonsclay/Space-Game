import { GAME_INIT } from '../actions';

function game(action) {
  switch(action.type) {
  case GAME_INIT:
    const width = action.payload.width;
    const height = action.payload.height;
    const shipY = Math.round(.1 * height);

    return { width: width, height: height, ship: { y: shipY } };
  }
}
