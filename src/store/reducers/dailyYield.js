import {
  SET_DAILY_YEILD_REPORT
} from "../types";

const initialState = {
 dailyYeildReport:[]
};

const dailyYieldReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_DAILY_YEILD_REPORT:
      return { ...state, dailyYeildReport: action.payload };
    default:
      return { ...state };
  }
};

export default dailyYieldReducer;
