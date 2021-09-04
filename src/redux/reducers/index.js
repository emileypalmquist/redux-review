import { combineReducers } from "redux";
import { parksReducer } from "./parksReducer";
import { charactersReducer } from "./charactersReducer";

export const rootReducer = combineReducers({
  parks: parksReducer,
  characters: charactersReducer,
});
