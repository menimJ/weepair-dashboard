import React from "react";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage";
// import LoginPage from "./Pages/LoginPage";
import SignIn from "./components/Auth/SignIn"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/login"} exact component={SignIn} />
      </Switch>
    </Router>
  );
}

const HomePage = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default App;
