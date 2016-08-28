import { connect } from 'react-redux';
import { shipStopped } from '../actions';
import Ship from '../components/Ship.jsx';

const mapStateToProps = (state) => {
  return state.ship;
};

const mapDispatchToProps = (dispatch) => {
  return {
    shipStopped: () => dispatch(shipStopped())
  };
};

const ShipAnimated = connect(mapStateToProps, mapDispatchToProps)(Ship);

export default ShipAnimated;
