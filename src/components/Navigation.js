import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/GuGuDan">GuGuDan</Link>
      <Link to="/WordRelay">WordRelay</Link>
      <Link to="/NumberBaseball">NumberBaseball</Link>
      <Link to="/ResponseCheck">ResponseCheck</Link>
      <Link to="/RSP">RSP</Link>
      <Link to="/Lotto">Lotto</Link>
      <Link to="/TicTacToe">TicTacToe</Link>
      <Link to="/MineSearch">MineSearch</Link>
    </div>
  );
}

export default Navigation;
