import { combineReducers } from 'redux';
import ShowModal from './reducer_show_modal';
import AddRecipe from './reducer_add_recipe';

const rootReducer = combineReducers({
  showModal: ShowModal,
  recipes: AddRecipe
});

export default rootReducer;
