import axios from "axios"; //use it to make ajax request
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user"); //sends req to express and varify user
  dispatch({ type: FETCH_USER, payload: res.data }); //this res object here is the output from axios
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
