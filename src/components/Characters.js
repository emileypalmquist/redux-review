import React from "react";
import CharacterCard from "./CharacterCard";
import { useSelector } from "react-redux";

const Characters = (props) => {
  const mapCharacters = () => {
    let charactersArray = Object.values(props.characters);
    return charactersArray.map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
  };
  return (
    <div>
      <div className="container">{mapCharacters()}</div>
    </div>
  );
};
export default Characters;
