import Dashboard from "./pages/Dashboard"
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import ProtectedRoute from "./utils/routes/protectedRoutes"
import PublicRoutes from "./utils/routes/publicRoutes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home,Login,DailyYeild,BonusDY ,ReferralEarning,Pools,TeamDY,ReferralReport,
DownlineReport,ActiveHistory,WidthdrawlReport

} from "./pages"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/downline-report" component={DownlineReport} />
          <ProtectedRoute exact path="/active-history" component={ActiveHistory} />
          <ProtectedRoute exact path="/widthdrawl-report" component={WidthdrawlReport} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/daily-yeild" component={DailyYeild} />
          <ProtectedRoute exact path="/bonus-dy" component={BonusDY} />
          <ProtectedRoute exact path="/referral-earning" component={ReferralEarning} />
          <ProtectedRoute exact path="/referral-report" component={ReferralReport} />
          <ProtectedRoute exact path="/pools" component={Pools} />
          <ProtectedRoute exact path="/team-dy" component={TeamDY} />
          
          <PublicRoutes exact path="/login"  component={Login} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
