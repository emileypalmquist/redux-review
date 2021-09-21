import React from "react";
import { useDispatch, connect } from "react-redux";

const ParkCard = ({ park, decreaseVote, dispatch }) => {
  // const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INCREASE_VOTE", payload: park.id });
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE_VOTE", payload: park.id });
        }}
      >
        DownVote
      </button>
    </div>
  );
};

export default connect(null)(ParkCard);
