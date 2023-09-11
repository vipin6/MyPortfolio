import React from "react";
import "./portfolio.css";
import Oreo from "../../assets/images/Oreo.png";
import marutitrain from "../../assets/images/marutitrain.jpg";
import Google from "../../assets/images/Google.png";
import DataVisuals from "../../assets/images/DataVisuals.png";
import Contact from "../contact/contact";

function Portfolio() {
  return (
    <>
      <div className="main-port">
        <h2 className="main">MY PORTFOLIO</h2>
        <hr className="port-hr" />
        <div className="row">
          <div className="col-md-6">
            <div class="card">
              <img src={Oreo} alt="Oreo" />
              <div class="card-body">
                <h5 class="card-title">HOSPITAL PROJECT</h5>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div class="card">
              <img src={marutitrain} alt="training" className="maruti-train" />
              <div class="card-body">
                <h5 class="card-title">MSIL TRAINING</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div class="card">
              <img src={Google} alt="google" className="maruti-train" />
              <div class="card-body">
                <h5 class="card-title">GOOGLE DATA ANALYTICS </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card">
              <img src={DataVisuals} alt="Visuals" className="maruti-train" />
              <div class="card-body">
                <h5 class="card-title">DATA VISUALIZATION</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
export default Portfolio;
