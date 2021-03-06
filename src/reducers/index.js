import { combineReducers } from 'redux';
import modal from './reducer_modal';
import recipes from './reducer_recipes';
import activeRecipe from './reducer_active_recipe';

const rootReducer = combineReducers({
  modal,
  activeRecipe,
  recipes
});

export default rootReducer;
