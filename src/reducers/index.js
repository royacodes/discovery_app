import { combineReducers } from "redux";
import toggleListReducer from "./ToggleListReducer.js";

const rootReducer = combineReducers({
  toggleListReducer,
});

export default rootReducer;
