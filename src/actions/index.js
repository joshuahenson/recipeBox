
export const triggerModal = () => {
  return {
    type: 'SHOW_MODAL'
    }
}

export const addRecipe = (recipeInputs) => {
  return {
    type: 'ADD_RECIPE',
    payload: recipeInputs
    }
}
