let nextRecipeId = 0;
export const triggerModal = () => {
  return {
    type: 'SHOW_MODAL'
    }
}

export const activeRecipe = (recipe) => {
  return {
    type: 'ACTIVE_RECIPE',
    payload: recipe
  }
}

export const addRecipe = (recipeInputs) => {
  return {
    type: 'ADD_RECIPE',
    payload: recipeInputs,
    id: nextRecipeId++
    }
}

export const editRecipe = (recipeInputs) => {
  return {
    type: 'EDIT_RECIPE',
    payload: recipeInputs
    }
}
