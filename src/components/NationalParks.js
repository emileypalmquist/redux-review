import React from "react";
import ParkCard from "./ParkCard";

const Parks = (props) => {
  console.log(props);
  const mapParks = () => {
    let parkArray = Object.values(props.parks);
    return parkArray.map((park) => {
      return (
        <ParkCard
          key={park.id}
          increaseVote={props.increaseVote}
          decreaseVote={props.decreaseVote}
          park={park}
        />
      );
    });
  };
  return (
    <div>
      <div className="container">{mapParks()}</div>
    </div>
  );
};

export default Parks;
