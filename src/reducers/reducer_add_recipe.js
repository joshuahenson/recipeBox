// State argument is not application state
// Only the state this reducer is responsible for

//########################INCOMPLETE COPIED FROM SHOW_MODAL
export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_RECIPE':
      //return Object.assign({}, state, action.payload);
      return [...state, action.payload];
  }
  return state;
}
