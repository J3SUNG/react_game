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
    </div>
  );
}

export default Navigation;
