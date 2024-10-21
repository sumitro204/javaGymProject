import React from "react";
import "./Home.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/Calories.png";


export const Home = () => {
  return (
    <>
      <h1> Welcome to the Home Page</h1>
      <div className="hero">
        <div className="left-h">
          {/*the best ad */}
          <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in the town</span>
          </div>
          {/*Hero Heading*/}
          <div className="hero-text">
            <div>
              <span className="stroke-text"> Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span className="message">
                In here we will help you to shape and build your ideal body and
                live up your life to the fullest
              </span>
            </div>
          </div>
          {/* Figures */}
          <div className="figures">
            <div>
              <span> +140 </span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+978 </span>
              <span>Members Joined</span>
            </div>
            <div>
              <span>+50 </span>
              <span>Fitness Programs</span>
            </div>
          </div>
          {/*Hero buttons */}
          <div className="hero-buttons">
           
            <button type="button" className="btn btn-outline-light">
              Learn More
            </button>
          </div>
        </div>
        <div className="right-h">
        

          <div className="heart-rate">
            <img src={Heart} alt="Heart Rate Icon" />
            <span>Heart Rate</span> <span>116 bpm</span>
          </div>
          {/*Hero images */}
          <img src={hero_image} alt="Hero" className="hero-image" />
          <img
            src={hero_image_back}
            alt="Hero Back"
            className="hero-image-back"
          />

          {/*Calories */}
          <div className="calories">
            <img src={Calories} alt="Calories Icon" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
