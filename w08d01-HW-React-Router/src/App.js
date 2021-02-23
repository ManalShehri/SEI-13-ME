import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Families from './components/pages/AllFamilies'
import Family from "./components/pages/Family";
import Member from './components/pages/Member'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <h1>I appear on all pages</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/families">
            <Families />
          </Route>
          <Route exact path="/families/:name">
            <Family />
          </Route>
          <Route exact path="/families/:name/members/:memberName">
            <Member />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
