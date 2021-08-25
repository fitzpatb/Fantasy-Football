import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Rankings from "./pages/Rankings";
import Articles from "./pages/Articles"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rbranks">
            <Rankings />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
