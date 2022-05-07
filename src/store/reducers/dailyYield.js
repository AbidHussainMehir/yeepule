import {
  SET_TEAM_DY_REPORT,SET_DAILY_YEILD_REPORT, SET_BONUS_DY_REPORT, SET_REFERRAL_EARNING_REPORT,SET_POOLS_REPORT
} from "../types";

const initialState = {
  dailyYeildReport: [],
  bonusDyReport: [],
  referralReport: [],
  poolsReport: [],
  teamDyReport:[]
};

const dailyYieldReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_DAILY_YEILD_REPORT:
      return { ...state, dailyYeildReport: action.payload };
    case SET_BONUS_DY_REPORT:
      return { ...state, bonusDyReport: action.payload };
    case SET_REFERRAL_EARNING_REPORT:
      return { ...state, referralReport: action.payload };
    case SET_POOLS_REPORT:
      return { ...state, poolsReport: action.payload };
      case SET_TEAM_DY_REPORT:
        return { ...state, teamDyReport: action.payload };
    default:
      return { ...state };
  }
};

export default dailyYieldReducer;
