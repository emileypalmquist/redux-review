import React from "react";
import ParkCard from "./ParkCard";
import { useSelector } from "react-redux";

const Parks = (props) => {
  // how we access state in redux store
  const parks = useSelector((state) => state.parks);

  const mapParks = () => {
    let parkArray = Object.values(parks);
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

export default Parks;
// const mapStateToProps = (state) => {
//   return { parks: state };
// };

// export default connect(mapStateToProps)(Parks);
