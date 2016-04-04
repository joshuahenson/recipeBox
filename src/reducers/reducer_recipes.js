const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.ingredients
      }
    case 'UPDATE_RECIPE':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.ingredients
      })
    default:
      return state
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ]
    case 'UPDATE_RECIPE':
      return state.map(t =>
        recipe(t, action)
      )
    default:
      return state
  }
}

export default recipes
