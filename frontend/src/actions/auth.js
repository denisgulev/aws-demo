import axios from "axios";
import { returnErrors } from "./messages";

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";

// CHECK THE TOKEN AND LOAD THE USER
export const loadUsers = () => (dispatch, getState) => {
  // User loading
  dispatch({
    type: USER_LOADING
  });

  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  // Make request
  axios
    .get("/api/auth/users", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
