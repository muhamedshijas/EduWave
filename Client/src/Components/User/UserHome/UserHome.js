import React from "react";
import "./UserHome.css";
import mainImage from "../../../assets/images/second-image.png";
import secondImage from "../../../assets/images/main-image.png";
import thirdImage from "../../../assets/images/third-image.png";
import Navbar from "../Navbar/Navbar";
function UserHome() {
  return (
    <div className="home-page">
      <section className="main-section">
        <div className="text-data">
          <h1>Create a new future with us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            possimus, temporibus rerum provident excepturi nisi maxime hic omnis
            quo sit libero expedita fugiat earum inventore.
          </p>
          <div className="btns">
            <button className="explore-btn">Explore Now</button>
            <button className="demo-btn">Request a Free Demo</button>
          </div>
        </div> 
        <div className="image">
          <img src={secondImage} alt="" srcset="" />
        </div>
      </section>
      <section className="second-section">
        <div className="image">
          <img src={thirdImage} alt="" srcset="" />
        </div>
        <div className="text-data">
          <h1>Unlock Different Plans for the Enhancing experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            possimus, temporibus rerum provident excepturi nisi maxime hic omnis
            quo sit libero expedita fugiat earum inventore.
          </p>
          <div className="btns">
            <button className="explore-btn">Browse Plans</button>
          </div>
        </div>
      </section>

      <section className="chat-section">
        <div className="text-data">
          <div className="text-head">
            <h1>Getting Confused...? </h1>
            <h1>Ask to our team </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            possimus, temporibus rerum provident excepturi nisi maxime hic omnis
            quo sit libero expedita fugiat earum inventore.
          </p>
          <div className="btns">
            <button className="explore-btn">Chat Now</button>
          </div>
        </div>
        <div className="image">
          <img src={mainImage} alt="" srcset="" />
        </div>
      </section>
    </div>
  );
}

export default UserHome;
