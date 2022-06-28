import { combineReducers } from "redux";
import projects from "./projects/reducers";

const rootReducer = combineReducers({
  projects,
});

export default rootReducer;
