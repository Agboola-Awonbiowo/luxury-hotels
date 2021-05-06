// import React from "react";
import Navbars from "./components/Navbars";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Facilities from "./components/Facilities";
import Rooms from "./components/Rooms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <Navbars />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/facility">
              <Facilities />
            </Route>

            <Route path="/rooms">
              <Rooms />
            </Route>
          </Switch>
        </main>

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
