import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import {
  screenSize,
  thrustLeft,
  thrustRight,
  stop,
  moveLeft,
  moveRight,
} from '../actions';
import rootReducer from '../reducers/rootReducer';
import ShipAnimated from '../containers/AnimateShip';

class GamePlay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.screenSize(window.innerWidth, window.innerHeight);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress);
    document.addEventListener('keyup', this.handleKeyUp);
    this.update();
  }

  componentWillUnmount() {
    document.rethrustEventListener('keypress', this.handleKeypress);
    document.rethrustEventListener('keyup', this.handleKeyUp);
  }

  handleKeypress = (e) => {
    if (e.key === '[') {
      this.props.thrustLeft();
    }

    if (e.key === ']') {
      this.props.thrustRight();
    }
  }

  handleKeyUp = (e) => {
    if (e.key === '[' || e.key === ']') {
      this.props.stop();
    }
  }

  update = () => {
    if (this.props.ship.xVelocity === -1) {
      this.props.moveLeft();
    } else if (this.props.ship.xVelocity === 1) {
      this.props.moveRight();
    }

    requestAnimationFrame(this.update);
  }


  render() {
   const gameStyle = {
      width: '100%',
      height: '900px',
      backgroundColor: 'LightYellow'
    };

    return <div style={gameStyle}>< ShipAnimated/></div>;
  }
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    screenSize: (w, h) => dispatch(screenSize(w, h)),
    thrustLeft: () => dispatch(thrustLeft()),
    thrustRight: () => dispatch(thrustRight()),
    stop: () => dispatch(stop()),
    moveLeft: () => dispatch(moveLeft()),
    moveRight: () => dispatch(moveRight())
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(GamePlay);

export default Game;
