// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = false, action) {
  switch(action.type) {
    case 'SHOW_MODAL':
      return !state;
    default:
      return state
  }
}
