import Dashboard from "./pages/Dashboard"
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/usercss.css"
import "./assets/css/trading.css"
import "./assets/css/NewUserPannel.css"
import "./assets/css/Member.css"
import "./assets/css/usercss.css"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
