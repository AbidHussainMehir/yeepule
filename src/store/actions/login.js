import {
  SET_USER
} from "../types";
import { API } from "./API";
export const loginAction = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/login?id=${payload}`);
    if (res?.data?.success) {
      localStorage.setItem('isAuthenticated', true)
      localStorage.setItem('user', JSON.stringify(res.data.data))
      dispatch({
        type: SET_USER,
        payload: res.data.data
      })
      return true
    } else {
      return false
    }
  } catch (e) {
    return false

  }
};
