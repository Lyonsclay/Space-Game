import React from 'react';
/* import styles from '../css/ship.css'; */

/* const Ship = (props) => {*/
class Ship extends React.Component {
  constructor(props) {
    super(props);
    console.log('window night ', window.innerWidth, window.innerHeight);
    this.state = {
      cxMirror: this.props.xMax/2,
      cx: this.props.xMax/2,
      cy: this.props.yMax/2
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.update, 300);
    this.setState({
      circle: 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update = () => {
    /* this.props.moveLeft();*/
    if (this.circle){
      /* requestAnimationFrame(this.update);*/
      this.setState({
        circle: this.state.circle++
      })
    }
  }

  render() {

    const getCircleX = () => {
      let box = {};

      if (this.circle) {
        box = this.circle.getBoundingClientRect();
        console.log('box ', box)
      }

      return (box.left || this.state.cx) - cx;
    };

    const getCircleColor = () => {
      let box = {};

      if (this.circle) {
        box = this.circle
      } 

      return box.fill || 'thistle';
    }

    console.log('getCircleColor : ', getCircleColor());

    const cx = (this.props.xMax/2);
    const cy = (this.props.yMax/2);

    const leftStyle = {
      transition: '1200ms',
      transform: `translate3d(-${this.props.xMax/2}px, 0%, 0px)`,
      fill: 'orange'
    };

    const rightStyle = {
      transition: 'transform 1200ms, fill 2s',
      transform: `translate3d(${this.props.xMax/2}px, 0px, 0px)`,
      fill: 'cyan'
    };

    const stopStyle = {
      transition: 'transform 1000s, fill 2s',
      transform: 'translateX(0%)',
      fill: 'white'
    };

    const shadowStyle = {
      transition: 'transform 1200ms, fill 2s',
      transform: `translate3d(${getCircleX()}px, 0px, 0px)`,
      fill: getCircleColor()
    }

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

    return (
      <svg width={this.props.xMax} height={this.props.yMax}>
        <g  >
          <circle
            style={shadowStyle}
            r="35px"
            cx={cx + 18}
            cy={cy}
            stroke='gray'
            fill='thistle'
            strokeWidth='2px'
          />
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
        </g>
      </svg>
    );
  }
};

export default Ship;
