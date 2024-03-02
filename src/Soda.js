import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div className="Coke">
      <h1>Coke™ It's the Real Thing!</h1>
      <h3><Link to="/" >Go Home</Link></h3>
      <img className="Bottle" 
        src="https://images.unsplash.com/photo-1648569883125-d01072540b4c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Soda;
