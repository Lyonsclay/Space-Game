export const ADD_UFO = 'ADD_UFO';
export const FIRE = 'FIRE';
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';

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
