import {
  SET_DAILY_YEILD_REPORT,
  SET_BONUS_DY_REPORT,
  SET_REFERRAL_EARNING_REPORT,
  SET_POOLS_REPORT,
  SET_TEAM_DY_REPORT,
  SET_WIDTHDRAWL_REPORT,
  SET_ACTIVE_HISTORY_REPORT,
  SET_DOWNLINE_REPORT,
  SET_MY_REFERRAL_REPORT
} from "../types";
import { API } from "./API";


export const getMyReferralReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/my_referral_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_MY_REFERRAL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getDownlineReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/downline_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DOWNLINE_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};


export const getActiveHistoryReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/active_history_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_ACTIVE_HISTORY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getWidthdrawlReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/withdrawl_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_WIDTHDRAWL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};






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

export const getBonusDYReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/bonus_dy_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_BONUS_DY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getReferralEarning = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/referral_earning_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_REFERRAL_EARNING_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getPoolsReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/pools_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_POOLS_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getTeamDyReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/team_dy_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_TEAM_DY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
