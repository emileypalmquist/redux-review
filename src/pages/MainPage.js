import { useContext } from "react";

import Parks from "../components/Parks";
import ParkCard from "../components/ParkCard";

import { AppContext } from "../globalState/context";

function MainPage() {
  const { parks, selectedPark } = useContext(AppContext);
  console.log(selectedPark);
  return (
    <div>
      <ParkCard park={parks[selectedPark]} />
      <Parks />
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default MainPage;
