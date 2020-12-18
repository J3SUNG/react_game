import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home/Home";
import GuGuDan from "./routes/GuGuDan/GuGuDan";
import WordRelay from "./routes/WordRelay/WordRelay";
import NumberBaseball from "./routes/NumberBaseball/NumberBaseball";
import ResponseCheck from "./routes/ResponseCheck/ResponseCheck";
import RSP from "./routes/RSP/RSP";
import Lotto from "./routes/Lotto/Lotto";
import TicTacToe from "./routes/TicTacToe/TicTacToe";
import MineSearch from "./routes/MineSearch/MineSearch";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="component">
        <Route path="/" exact={true} component={Home} />
        <Route path="/GuGuDan" component={GuGuDan} />
        <Route path="/WordRelay" component={WordRelay} />
        <Route path="/NumberBaseball" component={NumberBaseball} />
        <Route path="/ResponseCheck" component={ResponseCheck} />
        <Route path="/RSP" component={RSP} />
        <Route path="/Lotto" component={Lotto} />
        <Route path="/TicTacToe" component={TicTacToe} />
        <Route path="/MineSearch" component={MineSearch} />
      </div>
    </HashRouter>
  );
}

export default App;
