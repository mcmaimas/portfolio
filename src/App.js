import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Lost from "./pages/Lost/lost";

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/landing" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route render={Lost} />
      </Switch>
    </main>
  </Router>
);

export default App;
