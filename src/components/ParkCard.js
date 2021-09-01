import { useContext } from "react";
import { AppContext } from "../globalState/context";

const ParkCard = ({ park }) => {
  const { parksDispatch, setSelectedPark } = useContext(AppContext);

  const handleSelectClick = (e) => {
    setSelectedPark(park.id);
    localStorage.setItem("selectedParkId", park.id);
  };

  if (!park) {
    return <h2>No park selected</h2>;
  }
  return (
    <div className="card" onClick={handleSelectClick}>
      <h2>Name: {park.name}</h2>
      <p>Votes: {park.votes}</p>
      <img src={park.image} alt={park.name}></img>
      <br />
      <button
        onClick={(e) => {
          e.stopPropagation();
          parksDispatch({ type: "INCREASE_VOTE", id: park.id });
        }}
      >
        UpVote
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          parksDispatch({ type: "DECREASE_VOTE", id: park.id });
        }}
      >
        DownVote
      </button>
    </div>
  );
};

export default ParkCard;
