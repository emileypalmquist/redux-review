import { useContext } from "react";
import ParkCard from "./ParkCard";
import { AppContext } from "../stateContainer/context";

const Parks = () => {
  const { parks } = useContext(AppContext);

  const mapParks = () => {
    let parkArray = Object.values(parks);
    return parkArray.map((park) => {
      return <ParkCard key={park.id} park={park} />;
    });
  };

  return <div className="container">{mapParks()}</div>;
};

export default Parks;
