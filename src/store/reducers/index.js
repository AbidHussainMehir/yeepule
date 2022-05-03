import dashboardReducer from "./dashboard";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
});

export default rootReducer;