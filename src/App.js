import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Lost from "./pages/Lost/lost";

const App = () => (
  <Router>
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route render={Lost} />
      </Switch>
    </main>
  </Router>
);

export default App;
