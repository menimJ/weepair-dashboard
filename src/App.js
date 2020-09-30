import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/sign-up"} exact component={Register} />
      </Switch>
    </Router>
  );
}

// const HomePage = () => {
//   return (
//     <>
//       <LandingPage />
//     </>
//   );
// };

export default App;
