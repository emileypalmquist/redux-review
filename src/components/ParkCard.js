import React from "react";

const ParkCard = ({ park, increaseVote, decreaseVote }) => {
  return (
    <div className="card">
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={() => {
          increaseVote(park.id);
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          decreaseVote(park.id);
        }}
      >
        DownVote
      </button>
    </div>
  );
};

export default ParkCard;
