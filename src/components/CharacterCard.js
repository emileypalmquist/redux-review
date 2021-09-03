import React from "react";
const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <h2>Name: {character.name}</h2>
      <img src={character.image} alt={character.name}></img>
    </div>
  );
};

export default CharacterCard;
