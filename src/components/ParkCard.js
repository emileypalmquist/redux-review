import React from "react";
import { useDispatch, connect } from "react-redux";
import { increaseVote, decreaseVote } from "../redux/actions/parkActions";

const ParkCard = ({ park }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={() => {
          // dispatch({ type: "INCREASE_VOTE", payload: park.id });
          // increaseVote(park.id);
          const action = increaseVote(park.id);
          dispatch(action);
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          // decreaseVote(park.id);
          // dispatch({ type: "DECREASE_VOTE", payload: park.id });
          dispatch(decreaseVote(park.id));
        }}
      >
        DownVote
      </button>
    </div>
  );
};

export default ParkCard;
