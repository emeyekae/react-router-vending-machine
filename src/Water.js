import React from "react";
import { Link } from "react-router-dom";

function Water() {
  return (
    <div className="Water">
      <h1>日本の山から！</h1>
      <h3><Link to="/">Go Home</Link></h3>
      <img className="Bottle"
        src="https://images.unsplash.com/photo-1560653265-bbf94ac68a2a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Water;
