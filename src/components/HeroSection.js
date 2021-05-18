import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Cyber from "./videos/cyber.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={Cyber} type="video/mp4" />
      </video>
      <h1>In tutta autonomia!</h1>
      <p>Il futuro è adesso</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
