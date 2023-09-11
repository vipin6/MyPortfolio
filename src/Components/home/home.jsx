import React from "react";
import "./home.css";
import waveHand from "../../assets/images/waveHand.jpg";
import myimg from "../../assets/images/myimg.jpg";
import profile from "../../assets/images/profile.jpg";
import About from "../about/about";

function Home() {
return(
<>
<div className="mainsection">
<div className="second">
        <img src={profile} alt="mypicone" className="mypicone" />
      </div>
      <div className="third">
        <h6 className="intro"> <img src={waveHand} className="emoji" alt="wave" /> Hi, I'm</h6>
        <h1 className="main-intro">Vipin <img src={myimg} alt="mypic" className="mypic" /> Lamba</h1>
        <h2 className="develop">I'm a Designer!</h2>
        <p className="basics">To be associated with a dynamic and progressive organization that will allow me to utilize<br></br> 
        my abilities and qualifications in the field to add value to the organization while providing<br></br> me with opportunities for growth.</p>
        <a href="/" class="download-button"><i class="fas fa-download"></i> Download CV</a>
      </div>
      </div>
      <About/>
</>
);
}
export default Home;