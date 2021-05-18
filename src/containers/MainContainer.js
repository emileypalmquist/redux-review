import React from "react";
import NationalParks from "../components/NationalParks";
import Yosemite from "../assets/yosemite.jpg";
import Yellowstone from "../assets/yellowstone.jpg";
import Zion from "../assets/zion.jpg";
import MountRainier from "../assets/mount-rainier.jpg";

class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      parks: {
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
      },
    };
  }

  increaseVote = (parkID) => {
    this.setState({
      parks: {
        ...this.state.parks,
        [parkID]: {
          ...this.state.parks[parkID],
          votes: this.state.parks[parkID].votes + 1,
        },
      },
    });
  };

  decreaseVote = (parkID) => {
    this.setState({
      parks: {
        ...this.state.parks,
        [parkID]: {
          ...this.state.parks[parkID],
          votes: this.state.parks[parkID].votes - 1,
        },
      },
    });
  };

  render() {
    return (
      <div>
        <NationalParks
          increaseVote={this.increaseVote}
          decreaseVote={this.decreaseVote}
          parks={this.state.parks}
        />
        <h1>THANKS FOR VOTING</h1>
      </div>
    );
  }
}

export default MainContainer;
