export const ADD_UFO = 'ADD_UFO';
export const FIRE = 'FIRE';
export const THRUST_LEFT = 'THRUST_LEFT';
export const THRUST_RIGHT = 'THRUST_RIGHT';

export function fire(x, y) {
  return { type: FIRE, payload: { x, y } };
}

export function addUFO(x, y) {
  return { type: ADD_UFO, payload: { x, y } };
}

export function thrustRight() {
  return { type: THRUST_RIGHT };
}

export function thrustLeft() {
  return { type: THRUST_LEFT };
}
