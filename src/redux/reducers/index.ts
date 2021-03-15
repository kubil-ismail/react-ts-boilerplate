import { combineReducers } from "redux";

// Reducers
import authReducer from "./auth";
import generalReducer from "./general";

export default combineReducers({
  auth: authReducer,
  general: generalReducer,
});
