import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Shadow extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.update, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update = () => {
    this.setState({});
  };

  render() {
    const cx = this.props.xMax/2;
    const cy = this.props.yMax/2;

    const getCircleX = () => {
      let circle = {};

      if (this.circle) {
        circle = this.circle.getBoundingClientRect();
      }

      return circle.left - cx || -18;
    };

    const getShadowColor = () => {
      switch (this.props.xVelocity) {
        case -1:
          return 'orange';
        case 1:
          return 'cyan';
        default:
          return 'thistle';
      }
    };

    const getShadowTiming = () => {
      switch (this.props.xVelocity) {
        case 0:
          return '4s';
        default:
          return '2s';
      }
    };

    const leftStyle = {
      transition: 'transform 1200ms, fill 1500ms',
      transform: `translate3d(-${cx}px, 0%, 0px)`,
      fill: 'orange'
    };

    const rightStyle = {
      transition: 'transform 1200ms, fill 1500ms',
      transform: `translate3d(${cx}px, 0px, 0px)`,
      fill: 'cyan'
    };

    const stopStyle = {
      transition: 'transform 1000s, fill 8s',
      transform: 'translateX(0%)',
      fill: 'white'
    };

    const shadowStyle = {
      transition: `transform 1000ms, fill ${getShadowTiming()}`,
      transform: `translate3d(${getCircleX()}px, 0px, 0px)`,
      fill: getShadowColor()
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

    return (
      <svg width={this.props.xMax} height={this.props.yMax}>
        <g>
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

class App extends React.Component {
  constructor() {
    super();
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.state = {
      xMax: width,
      yMax: height,
      xVelocity: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeypress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeypress = (e) => {
    if (e.keyCode === 91) {
      this.setState({
        xVelocity: -1
      });
    }

    if (e.keyCode === 93) {
      this.setState({
        xVelocity: 1
      });
    }
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 221 || e.keyCode === 219) {
      this.setState({
        xVelocity: 0
      });
    }
  };


  render() {
    const appStyle = {
      width: '100%',
      height: '100vh',
      backgroundColor: 'salmon'
    };

    return (
      <div style={appStyle}>
        <Shadow {...this.state} />
      </div>
    );
  }
}

export default App;
/* render(<App />, document.getElementById('app'));*/
