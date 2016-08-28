import React from 'react';
import { Animation } from 'react-web-animation';

const Ship = (props) => {
  const x = 0;
  const xNext = (props.xVelocity + 1) ? 20 : -20;
  console.log('xNext', xNext, 'props.moving ', props.moving, ' xVelocity ', props.xVelocity);
  const moveShip = !props.moving && (props.xVelocity != 0);
  const keyFrames = moveShip ? [{
    transform: `translateX(${x}px)`
  }, {
    transform: `translateX(${xNext}px)`
  }] : [];

  const timing = moveShip ? {
    duration: 150,
    iterations: 1,
    fill: 'forwards'
  } : {};

  const onFinish = () => {
    props.shipStopped();
  };

  console.log('keyFrames', props.moving, keyFrames);

  return (
    <Animation keyframes={keyFrames} timing={timing}>
      <svg width={props.xMax} height={props.yMax}>
        <circle id="circle" r="25px" cx={props.x} cy={props.y} fill="orange" />
      </svg>
    </Animation>
  );

  return null;
};

export default Ship;
