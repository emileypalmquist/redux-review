import Characters from "../components/Characters";
import { getCharacters } from "../redux/actions/charactersActions";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";

function CharactersPage(props) {
  const dispatch = useDispatch();
  const fetchCharacters = bindActionCreators(getCharacters, dispatch);
  // console.log(props);

  const getChars = () => {
    console.log("get characters");
    fetchCharacters();
    // props.getCharacters();
  };

  return (
    <div>
      <h1>Characters Page</h1>
      <button onClick={getChars}>Get Characters</button>
      <Characters />
    </div>
  );
}

export default CharactersPage;
// function mapDispatchToProps(dispatch) {
//   return {
//     getCharacters: () => dispatch(getCharacters()),
//   };
// }

// export default connect(null, mapDispatchToProps)(CharactersPage);
