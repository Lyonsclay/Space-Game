import React from 'react';
/* import styles from '../css/ship.css'; */

/* const Ship = (props) => {*/
class Ship extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialStyle: {} };
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    *   return nextProps.xVelocity !== 0;
    * }
  */

  componentWillMount() {

  }

  componentDidMount() {
    this.props.moveLeft();
    this.setState({
      initialStyle: {
      }
    });
  }

  render() {
    const x = 0;
    const xNext = (this.props.xVelocity + 1) ? 20 : -20;
    const movingShip = !this.props.moving && (this.props.xVelocity != 0);

    const leftStyle = {
      transition: '1200ms',
      transform: `translate3d(-${this.props.xMax/2}px, 0%, 0px)`,
      fill: 'orange'
    };

    const rightStyle = {
      transition: 'transform 1200ms, fill 2s',
      transform: `translate3d(${this.props.xMax/2}px, 0%, 0px)`,
      fill: 'cyan'
    };

    const stopStyle = {
      transition: 'transform 1000s, fill 2s',
      transform: 'translateX(0%)',
      fill: 'white'
    };

    const getCoords = () => {
      let box;

      if (this.circle) {
        box = this.circle.getBoundingClientRect();
      } else {
        box = { cx, cy};
      }

      return {
        cx: box.left,
        cy: box.top 
      };
    };

    const shipStyle = () => {
      switch (this.props.xVelocity) {
        case -1:
          return leftStyle;
        case 1:
          return rightStyle;
        default:
          return stopStyle;
      }
    };
    const cx = (this.props.xMax/2).toString() + 'px';
    const cy = (this.props.yMax/2).toString() + 'px';


    return (
      <svg width={this.props.xMax} height={this.props.yMax}>
        <g  >
           <circle
            style={shipStyle()}
            id="circle"
            r="25px"
            cx={cx}
            cy={cy}
            stroke='gray'
            fill='white'
            strokeWidth='2px'
            ref={(ref) => this.circle = ref}
          />
         <circle
            r="29px"
            cx={getCoords().cx}
            cy={550}
            stroke='brown'
            fill='pink'
            strokeWidth='2px'
          />
        </g>
      </svg>
    );
  }
};

export default Ship;
