export default function(state = {}, action) {
  switch(action.type) {
    case 'ACTIVE_RECIPE':
      return action.payload;
    default:
      return state
  }
}