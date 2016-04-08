
// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = {showModal: false, updateModal: false}, action) {
  switch(action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        showModal: !state.showModal
      });
    default:
      return state;
  }
}