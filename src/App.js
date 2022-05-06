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
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Home,Login,DailyYeild } from "./pages"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/daily-yeild" component={DailyYeild} />
          <PublicRoutes exact path="/login"  component={Login} />
          <Route path="/" component={Home} />
          
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
