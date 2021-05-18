import React from "react";
import { connect } from "react-redux";
import { increaseVote, decreaseVote } from "../redux/actions/parksActions";

const ParkCard = (props) => {
  return (
    <div className="card">
      <h2>Name: {props.park.name}</h2>
      <p>Votes: {props.park.votes}</p>
      <img src={props.park.image} alt={props.park.name}></img>
      <br />
      <button
        onClick={() => {
          props.increaseVote(props.park.id);
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          props.decreaseVote(props.park.id);
        }}
      >
        DownVote
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseVote: (parkId) =>
//       dispatch({ type: "INCREASE_VOTE", payload: parkId }),
//     decreaseVote: (parkId) =>
//       dispatch({ type: "DECREASE_VOTE", payload: parkId }),
//   };
// };

export default connect(null, { increaseVote, decreaseVote })(ParkCard);
