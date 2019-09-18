import axios from "axios";
import { FETCH_USER } from "./types";

//define action creator to return an action
//dispatch action - sends the action to the reducers
//redux thunk allows us to manually/directly dispatch an action in any point we need from an action creator

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
