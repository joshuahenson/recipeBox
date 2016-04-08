// recipe id is stored to localStorage to keep up with state that is stored
let nextRecipeId = window.localStorage.getItem('nextRecipeId') || 0;

export const triggerModal = () => {
  return {
    type: 'SHOW_MODAL'
  };
};

export const triggerUpdateModal = () => {
  return {
    type: 'SHOW_UPDATE_MODAL'
  };
};

export const deleteRecipe = (id) => {
  return {
    type: 'DELETE_RECIPE',
    id
  };
};

export const activeRecipe = (recipe) => {
  return {
    type: 'ACTIVE_RECIPE',
    payload: recipe
  };
};

export const addRecipe = (recipeInputs) => {
  nextRecipeId++;
  window.localStorage.setItem('nextRecipeId', nextRecipeId);
  return {
    type: 'ADD_RECIPE',
    payload: recipeInputs,
    id: nextRecipeId
  };
};

export const updateRecipe = (recipeInputs) => {
  return {
    type: 'UPDATE_RECIPE',
    payload: recipeInputs
  };
};
