import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NaveBar";
import AllMovies from "./components/Allmovies";
import Home from "./components/Home";
import About from "./components/About";
import ShowOneMovie from "./components/ShowOneMovie";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [selectMovie, setSelectMovie] = useState({});
  const history = useHistory();
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);

  return (
    <div className="">
      <Router>
        <NavBar />
        <Route path="/movies/:id">
          <ShowOneMovie selectMovie={selectMovie} />
        </Route>
        <Route exact path="/movies">
          <AllMovies setSelectMovie={setSelectMovie} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login loginCallback={userLogin} />
        </Route>
        <Route path="/signup">
          <Signup loginCallback={userLogin} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
