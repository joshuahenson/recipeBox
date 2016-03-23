// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
  }
  return state;
}
