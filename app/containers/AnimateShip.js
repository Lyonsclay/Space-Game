import { connect } from 'react-redux';
import Ship from '../components/Ship';

const mapStateToProps = (state) => {
  return state.ship;
};

const ShipComponent = connect(mapStateToProps)(Ship);

export default ShipComponent;
