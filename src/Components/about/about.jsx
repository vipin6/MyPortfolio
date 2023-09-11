import React from "react";
import "./about.css";
import gmail from "../../assets/images/gmail.png";
import whatsapp from "../../assets/images/whatsapp.png";
import map from "../../assets/images/map.jpg";
import cv from "../../assets/images/cv.jpeg";
import vipin from "../../assets/images/vipin.jpg"
import Maruti from "../../assets/images/Maruti.png";
import SEEc from "../../assets/images/SEEc.jpeg";
import Portfolio from "../portfolio/portfolio";

function About() {
  return (
    <>
      <div className="about">
        <div className="first-row">
          <div className="row">
            <div className="col-md-4">
              <h5 className="head">ABOUT ME</h5>
              <p className="my">MY NAME IS VIPIN !! </p>
              <p className="secondp">
                I AM AVAILABLE FOR <br></br>WEB DEVELOPMENT PROJECTS
              </p>
              <p className="third">
                "Hi there! I'm a Full Stack Web Developer, and I specialize in
                creating dynamic and engaging websites from start to finish.
                With my skills in both front-end and back-end development, I'm
                able to bring your vision to life and deliver a seamless user
                experience."
              </p>
              <hr className="secondline" />
            </div>

            <div className="col-md-4">
              <img src={vipin} alt="Your Alt Text" className="starbucks" />
            </div>

            <div className="col-md-4">
              <div className="buttons-container">
                <button className="mail-button">
                  <img src={gmail} alt="Mail Icon" className="mail-icon" />
                  <span className="button-text">MAIL ME</span>
                </button>
                <br />

                <button className="mail-button">
                  <img src={whatsapp} alt="whatsapp" className="mail-icon" />
                  <span className="button-text">WHATSAPP ME</span>
                </button>
                <br />

                <button className="mail-button">
                  <img src={map} alt="map" className="mail-icon" />
                  <span className="button-text">MEET ME</span>
                </button>
                <br />

                <button className="mail-button">
                  <img src={cv} alt="" className="mail-icon" />
                  <span className="button-text">DOWNLOAD CV</span>
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="row">
            <div className="col-md-6">
              <h3>Experience</h3>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                     <img src={Maruti} alt="marutilogo" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <h5 className="card-title" className="self-title">Maruti Suzuki India Ltd.</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Web App Developer Intern</h6>
                      <p className="card-text">
                      Developed front end for the web application.<br></br>      
                      Collected data from Database, verifying and updating if required.                              
                      Created forms for different occasions and validated them using JavaScript

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                <div className="row">
                    <div className="col-md-4">
                      <img src={SEEc} alt="SEEC" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <h5 class="card-title" className="self-title">SEEC| DSW| LPU</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Head Volunterr</h6>
                      <p class="card-text">
                        Managed all the mega events that happend in LPU Campus.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <h3>Skills</h3>
            <p>HTML</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>CSS</p>
              <div class="progress">
                <div
                  class="progress-bar1"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>JavaScript</p>
              <div class="progress">
                <div
                  class="progress-bar2"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p>MongoDB</p>
              <div class="progress">
                <div
                  class="progress-bar3"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <p>Networking</p>
              <div class="progress">
                <div
                  class="progress-bar4"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <p>Data Analysis</p>
              <div class="progress">
                <div
                  class="progress-bar5"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Portfolio/>
    </>
  );
}

export default About;
