export const getCharacters = () => {
  return (dispatch) => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "ADD_CHARACTERS",
          payload: data.results,
        })
      );
  };
};
