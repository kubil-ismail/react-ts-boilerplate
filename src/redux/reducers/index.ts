import { combineReducers } from "redux";

// Reducers
import authReducer from "./auth";

export default combineReducers({
  auth: authReducer,
});
