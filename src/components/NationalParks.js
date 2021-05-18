import React from "react";
import ParkCard from "./ParkCard";
import { connect } from "react-redux";

const Parks = (props) => {
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
  return {
    parks: state.parks,
  };
};

export default connect(mapStateToProps)(Parks);
