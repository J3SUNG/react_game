import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home/Home";
import GuGuDan from "./routes/GuGuDan/GuGuDan";
import WordRelay from "./routes/WordRelay/WordRelay";
import NumberBaseball from "./routes/NumberBaseball/NumberBaseball";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/GuGuDan" component={GuGuDan} />
      <Route path="/WordRelay" component={WordRelay} />
      <Route path="/NumberBaseball" component={NumberBaseball} />
    </HashRouter>
  );
}

export default App;
