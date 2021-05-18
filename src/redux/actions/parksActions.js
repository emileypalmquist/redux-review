export const increaseVote = (parkId) => {
  return {
    type: "INCREASE_VOTE",
    payload: parkId,
  };
};

export const decreaseVote = (parkId) => {
  return {
    type: "DECREASE_VOTE",
    payload: parkId,
  };
};
