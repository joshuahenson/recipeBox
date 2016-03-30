// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_RECIPE':
      if(state.some(elem => elem.recipeName === action.payload.recipeName)){
        //*************************add an alert here ********************
        console.log('That recipe already exists')
        return state;
      }
      return [...state, action.payload];
  }
  return state;
}
