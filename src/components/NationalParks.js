import React from "react";
import ParkCard from "./ParkCard";
import { useSelector, connect } from "react-redux";

const Parks = (props) => {
  console.log(props);
  // how we access state in redux store
  const parks = useSelector((state) => state);

  const mapParks = () => {
    let parkArray = Object.values(props.parks);
    return parkArray.map((park) => {
      return <ParkCard key={park.id} park={park} />;
    });
  };
  return (
    <div>
      <div className="container">{mapParks()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { parks: state };
};

export default connect(mapStateToProps)(Parks);
