import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import ShipAnimated from '../containers/AnimateShip';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener(keyPress);
    update();
  }

  componentWillUnmount() {
    document.removeEventListener(keypress);
  }

  update = () => {
    return "monster";
  }

  render() {

   const gameStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'LightYellow'
    };

    return <div style={gameStyle}><p>{"Rotten"}</p><ShipAnimated /></div>;
  }
}

const initialState = { ship: { x: 600, y: 600 }, ufo: { x: 800, y: 100 } };
let store = createStore(rootReducer, initialState);

export default Game;
