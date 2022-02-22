import axios from "axios"; //use it to make ajax request
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user"); //sends req to express and varify user
  dispatch({ type: FETCH_USER, payload: res.data }); //this res object here is the output from axios
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = (id) => async (dispatch) => {
  let { data } = await axios.delete(`/api/surveys/delete/${id}`);
  dispatch({ type: FETCH_SURVEYS, payload: data });
};
