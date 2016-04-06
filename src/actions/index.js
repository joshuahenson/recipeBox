let nextRecipeId = 0;
export const triggerModal = () => {
  return {
    type: 'SHOW_MODAL'
    }
}

export const triggerUpdateModal = () => {
  return {
    type: 'SHOW_UPDATE_MODAL'
    }
}

export const deleteRecipe = (id) => {
  return {
    type: 'DELETE_RECIPE',
    id
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

export const updateRecipe = (recipeInputs) => {
  return {
    type: 'UPDATE_RECIPE',
    payload: recipeInputs
    }
}
