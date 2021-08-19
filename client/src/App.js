import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
