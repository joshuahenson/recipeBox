import { combineReducers } from 'redux';
import showModal from './reducer_show_modal';
import showAlert from './reducer_show_alert';
import showUpdateModal from './reducer_show_update_modal';
import recipes from './reducer_recipes';
import activeRecipe from './reducer_active_recipe';

const rootReducer = combineReducers({
  showAlert,
  showModal,
  showUpdateModal,
  activeRecipe,
  recipes
});

export default rootReducer;
