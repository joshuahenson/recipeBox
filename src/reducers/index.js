import { combineReducers } from 'redux';
import ShowModal from './reducer_show_modal';

const rootReducer = combineReducers({
  showModal: ShowModal
});

export default rootReducer;
