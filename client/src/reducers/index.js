import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  //auth piece of state is bn manufactured by the auth reducer
  auth: authReducer
});
