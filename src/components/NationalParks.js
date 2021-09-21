import React from "react";
import ParkCard from "./ParkCard";

import { useSelector, connect } from "react-redux";

const Parks = (props) => {
  // const parks = useSelector((state) => state);

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
      <div className="container"> {mapParks()} </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { parks: state };
}

export default connect(mapStateToProps)(Parks);
