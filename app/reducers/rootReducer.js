import { combineReducers } from 'redux';
import  bullets  from './bullets';
import ufos from './ufos';
import ship from './ship';


export default combineReducers({bullets, ufos, ship});
