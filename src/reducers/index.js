import { combineReducers } from 'redux';
import showModal from './reducer_show_modal';
import recipes from './reducer_recipes';

const rootReducer = combineReducers({
  showModal,
  recipes
});

export default rootReducer;
