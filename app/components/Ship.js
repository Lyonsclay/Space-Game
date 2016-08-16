import React from 'react';

const Ship = (props) => {
  let moveShipStyle = {};

  if (props.velocityX !== 0) {
    console.log('fifty cents'); 
    const xNext = props.x;
    const x = x - (props.xVelocity * Math.random() * 100);

    const keyframeMotion = `@-webkit-keyframes motion {
      0% {
        transform: -webkit-translateX(${x}px)
      }
      100% { transform: -webkit-translateX(${xNext}px)}
    }`;
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(keyframeMotion, 0);


    moveShipStyle = {
      animationName: 'motion',
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.6s',
      animationDelay: '0.0s',
      animationIterationCount: 1,
      animationDirection: 'normal'
    };
  }

  const shipStaticStyle = {
    fontSize: '40px',
    transform: 'translate(' + props.x.toString() + 'px' + ')',
    backgroundColor: 'LightBlue',
    width: '100px',
    height: '50px'
  };

  const shipStyle = Object.assign({}, shipStaticStyle, moveShipStyle);

  console.log(shipStyle);
  console.log(props);

  return <div style={shipStyle}>SHIP</div>;
};

export default Ship;
