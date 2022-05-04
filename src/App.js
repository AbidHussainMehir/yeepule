import Dashboard from "./pages/Dashboard"
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import { Layout } from "./components"
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Dashboard />
      </Layout>
    </Provider>
  );
}

export default App;
