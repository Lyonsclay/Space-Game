export const ADD_UFO = 'ADD_UFO';
export const FIRE = 'FIRE';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export function fire(x, y) {
  return { type: 'FIRE', payload: { x, y } };
}

export function addUFO(x, y) {
  return { type: 'ADD_UFO', payload: { x, y } };
}

export function left() {
  return { type: 'LEFT' };
}

export function right() {
  return { type: 'RIGHT' };
}

export function moveRight() {
  return { type: 'MOVE_RIGHT' };
}

export function moveLeft() {
  return { type: 'MOVE_LEFT' };
}
