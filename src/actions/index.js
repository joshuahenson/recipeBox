let nextRecipeId = 0;
export const triggerModal = () => {
  return {
    type: 'SHOW_MODAL'
    }
}

export const addRecipe = (recipeInputs) => {
  recipeInputs.id = nextRecipeId++
  return {
    type: 'ADD_RECIPE',
    payload: recipeInputs
    }
}

export const editRecipe = (recipeInputs) => {
  return {
    type: 'EDIT_RECIPE',
    payload: recipeInputs
    }
}
