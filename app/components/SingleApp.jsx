import React from 'react';
import ReactDOM, {
  render
} from 'react-dom';

const Controls = (props) => {
  const fadeStyle = {
    transition: 'opacity 2s',
    opacity: 0
  };

  return (
    <text
      x={props.xMax/2 - 125}
      y={60}
      fontFamily='helvetica'
      fill='Brown'
      stroke='Brown'
      fontSize='30'
      opacity='.6'
      style={props.hideControls ? fadeStyle : {} }
    >
      <tspan>Use Bracket Keys</tspan>

      <tspan dy='60' dx='-230' fontSize='40'>
        &#x21e6; &nbsp; [ &nbsp; &nbsp; ] &nbsp; &#x21e8;
      </tspan>
    </text>
  );
};

class Shadow extends React.Component {

  render() {
    const cx = this.props.xMax / 2;
    const cy = this.props.yMax * 0.5;

    const getCircleX = () => {
      let circle = {};

      if (this.circle) {
        circle = this.circle.getBoundingClientRect();
      }

      return circle.left - cx + 12.5 || -18;
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

    const getShadowRx = () => {
      switch (this.props.xVelocity) {
        case 0:
          return '35px';
        default:
          return '55px';
      }
    };

    const leftStyle = {
      transition: 'transform 1000ms, fill 1500ms, rx 500ms',
      transform: `translate3d(-${cx}px, 0%, 0px)`,
      rx: '40px',
      fill: 'orange'
    };

    const rightStyle = {
      transition: 'transform 1000ms, fill 1500ms,  rx 500ms',
      transform: `translate3d(${cx}px, 0px, 0px)`,
      rx: '40px',
      fill: 'cyan'
    };

    const stopStyle = {
      transition: 'transform 1000s, fill 8s',
      transform: 'translateX(0px)',
      fill: 'white'
    };

    const shadowStyle = {
      transition: `transform 600ms, fill ${getShadowTiming()}, rx 70ms 500ms`,
      transform: `translate3d(${getCircleX()}px, 0px, 0px)`,
      rx: getShadowRx(),
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
        <Controls xMax={this.props.xMax} hideControls={this.props.hideControls}/>
        <g>
          <ellipse
            style={shadowStyle}
            rx="35px"
            ry="35px"
            cx={cx + 18}
            cy={cy}
            stroke='gray'
            fill='thistle'
            strokeWidth='2px'
          />

          <ellipse
            style={shipStyle()}
            id="circle"
            rx="25px"
            ry="25px"
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
      xVelocity: 0,
      hideControls: false
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
        xVelocity: -1,
        hideControls: true
      });
    }

    if (e.keyCode === 93) {
      this.setState({
        xVelocity: 1,
        hideControls: true
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
