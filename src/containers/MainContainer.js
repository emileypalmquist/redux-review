import React, { useState } from "react";
import NationalParks from "../components/NationalParks";
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

function MainContainer() {
  const [parks, setParks] = useState(initialParks);

  const increaseVote = (parkID) => {
    setParks({
      ...parks,
      [parkID]: {
        ...parks[parkID],
        votes: parks[parkID].votes + 1,
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
      <NationalParks increaseVote={increaseVote} decreaseVote={decreaseVote} />
      <h1>THANKS FOR VOTING</h1>
    </div>
  );
}

export default MainContainer;
