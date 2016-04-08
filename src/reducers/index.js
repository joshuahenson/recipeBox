import { combineReducers } from 'redux';
import modal from './reducer_modal';
// import showUpdateModal from './reducer_show_update_modal';
import recipes from './reducer_recipes';
import activeRecipe from './reducer_active_recipe';

const rootReducer = combineReducers({
  modal,
  // showUpdateModal,
  activeRecipe,
  recipes
});

export default rootReducer;
