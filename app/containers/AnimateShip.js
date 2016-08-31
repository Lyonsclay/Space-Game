import { connect } from 'react-redux';
import {
  shipStopped,
  moveLeft,
  moveRight
} from '../actions';
import Ship from '../components/Ship.jsx';

const mapStateToProps = (state) => {
  return state.ship;
};

const mapDispatchToProps = (dispatch) => {
  return {
    shipStopped: () => dispatch(shipStopped()),
    moveLeft: () => dispatch(moveLeft()),
    moveRight: () => dispatch(moveRight())
  };
};

const ShipAnimated = connect(mapStateToProps, mapDispatchToProps)(Ship);

export default ShipAnimated;
