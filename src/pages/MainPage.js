import React from "react";
import Parks from "../components/Parks";
import Yosemite from "../assets/yosemite.jpg";
import Yellowstone from "../assets/yellowstone.jpg";
import Zion from "../assets/zion.jpg";
import MountRainier from "../assets/mount-rainier.jpg";

const initialParks = {
  1: {
    id: 1,
    name: "Yosemite",
    votes: 10,
    image: Yosemite,
  },
  2: {
    id: 2,
    name: "Zion",
    votes: 10,
    image: Zion,
  },
  3: {
    id: 3,
    name: "Yellowstone",
    votes: -1,
    image: Yellowstone,
  },
  4: {
    id: 4,
    name: "Mount Rainier",
    votes: 10,
    image: MountRainier,
  },
};

function MainPage() {
  const increaseVote = (parkID) => {
    setParks({
      ...this.state.parks,
      [parkID]: {
        ...this.state.parks[parkID],
        votes: this.state.parks[parkID].votes + 1,
      },
    });
  };

  const decreaseVote = (parkID) => {
    setParks({
      ...parks,
      [parkID]: {
        ...parks[parkID],
        votes: parks[parkID].votes - 1,
      },
    });
  };

  return (
    <div>
      <Parks
        increaseVote={increaseVote}
        decreaseVote={decreaseVote}
        parks={parks}
      />
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default MainPage;
