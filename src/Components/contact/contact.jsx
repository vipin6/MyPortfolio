import React from "react";
import "./contact.css";
import calogo from "../../assets/images/callogo.png";
import mesages from "../../assets/images/mesages.jpg";
import visitus from "../../assets/images/visitus.png";
import insta from "../../assets/images/insta.jpeg";
import linkedin from "../../assets/images/linkedin.png";
import what from "../../assets/images/what.png";
import mail from "../../assets/images/mail.png";

function Contact() {
  return (
    <>
      <div class="contact-container">
        <div class="row first-row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={mesages}
                      alt="messagelogo"
                      className="contact-pics"
                    />
                  </div>
                  <div className="col-md-8">
                    <h6 class="card-subtitle mb-2 text-muted">Chat to me</h6>
                    <p class="card-text">
                      I'm here to help.<br></br>
                      vipinlamba.2706@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={visitus}
                      alt="visit me"
                      className="contact-pics"
                    />
                  </div>
                  <div className="col-md-8">
                    <h6 class="card-subtitle mb-2 text-muted">
                      Visit to my Place
                    </h6>
                    <p class="card-text">Sec-12, Gurugram, Haryana</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img src={calogo} alt="callogo" className="contact-pics" />
                  </div>
                  <div className="col-md-8">
                    <h6 class="card-subtitle mb-2 text-muted">Call Me</h6>
                    <p class="card-text">
                      Mon-Sat from 9am to 9pm<br></br>
                      +91 9560518615
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div className="form-container">
              <form>
                <div class="form-group">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                  />
                </div>
                <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    name="lastname"
                  />
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div class="form-group">
                  <label for="message">Your Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  S ubmit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
       <div className="foot-img-con">
        <img src={insta} alt="insta" className="img-foot" />
        <img src={mail} alt="mail" className="img-foot1" />
        <img src={what} alt="whatsapp" className="img-foot2" />
        <img src={linkedin} alt="linkedin"  className="img-foot3"  />
       </div>
      </div>
    </>
  );
}

export default Contact;
