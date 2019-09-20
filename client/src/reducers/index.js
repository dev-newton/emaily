import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  //auth piece of state is bn manufactured by the auth reducer
  auth: authReducer,
  form: reduxFormReducer,
  surveys: surveysReducer
});
