import { SET_DATA } from "../types";

const initialState = { data: null };

const dashboardReducer = (state = { ...initialState }, action) => {
  console.log("action",action)
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default dashboardReducer;
