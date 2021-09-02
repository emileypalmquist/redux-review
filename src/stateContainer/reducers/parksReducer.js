export function parksReducer(state, action) {
  switch (action.type) {
    case "INCREASE_VOTE":
      // return state.map(park => park.id === action.payload ? {...park, votes: park.votes + 1} : park)
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          votes: state[action.id].votes + 1,
        },
      };
    case "DECREASE_VOTE":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          votes: state[action.id].votes - 1,
        },
      };
    default:
      return state;
  }
}
