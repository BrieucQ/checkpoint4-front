import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Aboutme" component={Aboutme} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
