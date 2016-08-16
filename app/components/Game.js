import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import {
  left,
  right,
  moveLeft,
  moveRight,
} from '../actions';
import rootReducer from '../reducers/rootReducer';
import ShipAnimated from '../containers/AnimateShip';

class GamePlay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress);
    document.addEventListener('keyup', this.handleKeyUp);
    // this.update();
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeypress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeypress = (e) => {
    if (e.key === '[') {
      this.props.moveLeft();
    }

    if (e.key === ']') {
      this.props.moveRight();
    }
  }

  handleKeyUp = (e) => {
    console.log('key up ', e);
  }

  update = () => {
    if (this.props.ship.xVelocity === -1) {
      console.log(this.props);
      this.props.left();
    } else if (this.props.ship.xVelocity === 1) {
      this.props.moveRight();
    }
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
    left: () => dispatch(left()),
    right: () => dispatch(right()),
    moveLeft: () => dispatch(moveLeft()),
    moveRight: () => dispatch(moveRight())
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(GamePlay);

export default Game;
