import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div class="HomeImage">
      <img className="Vmachine" 
        src="https://images.unsplash.com/photo-1703756292796-cf79b8f87382?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" style={{
        clipPath: "rect(25% auto 90% auto)", marginTop: "-33.3%" }}
      />
      <div className="Press">Press a button below for your favorite bottled beverage.</div> 
      <div className="SodaOverlay"><Link to="/soda" style={{ color: 'white', textDecoration: 'none'}}>Soda</Link></div> 
      <div className="WaterOverlay"><Link to="/water" style={{ color: 'white', textDecoration: 'none' }}>Water</Link></div> 
      <div className="JuiceOverlay"><Link to="/juice" style={{ color: 'white', textDecoration: 'none' }}>Juice</Link></div> 
    </div>
  );
}

export default Home;
