import React from "react";
import CharacterCard from "./CharacterCard";
import { useSelector } from "react-redux";

const Characters = (props) => {
  const characters = useSelector((state) => state.characters);

  const mapCharacters = () => {
    return characters.map((character) => {
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
