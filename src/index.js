import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import Yosemite from "./assets/yosemite.jpg";
import Yellowstone from "./assets/yellowstone.jpg";
import Zion from "./assets/zion.jpg";
import MountRainier from "./assets/mount-rainier.jpg";

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

function appReducer(state = initialParks, action) {
  switch (action.type) {
    case "hello": {
      return {
        ...state,
        hello: "world",
      };
    }
    case "INCREASE_VOTE": {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          votes: state[action.payload].votes + 1,
        },
      };
    }
    case "DECREASE_VOTE": {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          votes: state[action.payload].votes - 1,
        },
      };
    }
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers());

// store.dispatch({type: 'hello'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
