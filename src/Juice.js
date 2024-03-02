import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div className="Juice">
      <h1>Drink your apple a day!©</h1>
      <h3><Link to="/">Go Home</Link></h3>
      <img className="Bottle"
        src="https://images.unsplash.com/photo-1626120032630-b51c96a544f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Soda;
