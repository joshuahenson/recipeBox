const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.directions
      };

    case 'UPDATE_RECIPE':
      if (state.id !== action.payload.id) {
        return state;
      }
      return Object.assign({}, state, {
        recipeName: action.payload.recipeName,
        ingredients: action.payload.ingredients,
        directions: action.payload.directions
      });
    default:
      return state;
  }
};

const exampleState = {
  id: 'x',
  recipeName: 'Pancakes',
  ingredients: ['1 1/2 cups all-purpose flour', '3 1/2 teaspoons baking powder', '1 teaspoon salt',
    '1 tablespoon white sugar', '1 1/4 cups milk', '1 egg', '3 tablespoons melted butter'],
  directions: 'In a large bowl, sift together the flour, baking powder, salt and sugar.' +
  ' Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.'
};

const recipes = (state = [exampleState], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ];

    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id);

    case 'UPDATE_RECIPE':
      return state.map(t =>
        recipe(t, action)
      );
    default:
      return state;
  }
};

export default recipes;
