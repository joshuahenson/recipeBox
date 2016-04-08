
// State argument is not application state
// Only the state this reducer is responsible for
export default function(state = {showModal: false, updateModal: false}, action) {
  switch(action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        showModal: !state.showModal
      });
    case 'SHOW_UPDATE_MODAL':
      return Object.assign({}, state, {
        updateModal: !state.updateModal
      });      
    default:
      return state;
  }
}