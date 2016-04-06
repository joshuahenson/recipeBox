const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.directions
      }

    case 'UPDATE_RECIPE':
      if (state.id !== action.payload.id) {
        return state
      }
      return Object.assign({}, state, {
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.directions
      })
    default:
      return state
  }
}

const exampleState = {id: 'x', recipeName: 'Pizza', ingredients: ['Phone', 'Phone number of pizza place'], directions: 'Call pizza place'}

const recipes = (state = [exampleState], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ]

    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id)

    case 'UPDATE_RECIPE':
      return state.map(t =>
        recipe(t, action)
      )
    default:
      return state
  }
}

export default recipes
