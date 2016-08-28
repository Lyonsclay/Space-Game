import React from 'react';

const Ship = (props) => {
  let moveShipStyle = {};

  if (props.velocityX !== 0) {
    console.log('fifty cents'); 
    const xNext = props.x;
    const x = props.x - props.xVelocity * 20;
    console.log(x, props);

    const motion = 'motion' + (Math.round(Math.random() * 1000)).toString();
    const keyframeMotion = `keyframes ${motion} {
      0% {
        transform: translateX(${x}px)
      }
      100% { transform: translateX(${xNext}px)}
    }`;
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(keyframeMotion, style.sheet.cssRules.length);


    const moveShipStyle = {
      animationName: motion,
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.6s',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal'
    };
  }

  const shipStaticStyle = {
    fontSize: '40px',
    // transform: `translate3d(${props.x.toString()}px, ${props.y.toString()}px, 0px)`,
    backgroundColor: 'LightBlue',
    width: '100px',
    height: '50px'
  };

  const shipStyle = Object.assign({}, shipStaticStyle, moveShipStyle);

  console.log(shipStyle);
  console.log('this props rocks', props.x, props.y);

  return <div style={shipStaticStyle}>SHIP</div>;
};

export default Ship;
