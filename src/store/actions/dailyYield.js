import {
  SET_DAILY_YEILD_REPORT
} from "../types";
import { API } from "./API";
export const getDailyYieldReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/daily_yeild_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DAILY_YEILD_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
