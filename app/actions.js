export const SCREEN_SIZE = 'SCREEN_SIZE';
export const ADD_UFO = 'ADD_UFO';
export const FIRE = 'FIRE';
export const THRUST_LEFT = 'THRUST_LEFT';
export const THRUST_RIGHT = 'THRUST_RIGHT';
export const STOP = 'STOP';
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export function screenSize(w, h) {
  return { type: SCREEN_SIZE, payload: { w, h } };
}
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

export function stop() {
  return { type: STOP };
}

export function moveLeft() {
  return { type: MOVE_LEFT };
}

export function moveRight() {
  return { type: MOVE_RIGHT };
}
