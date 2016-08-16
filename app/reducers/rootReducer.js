import { combineReducers } from 'redux';
import  bullets  from './bullets';
import ufos from './ufos';
import ship from './ship';

const rootReducer = combineReducers({bullets, ufos, ship});
export default rootReducer;
