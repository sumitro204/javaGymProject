import { useState } from "react";
import "./Service.css";

const servicesData = [
  {
    icon: "💪", // Strength Training Icon
    heading: "Strength Training",
    details: "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    icon: "❤️", // Cardio Training Icon
    heading: "Cardio Training",
    details: "In this program, you are trained to do sequential moves in a range of 20 until 30 minutes.",
  },
  {
    icon: "🔥", // Fat Burning Icon
    heading: "Fat Burning",
    details: "This program is suitable for you who want to get rid of your fat and lose weight.",
  },
  {
    icon: "💗", // Health Fitness Icon
    heading: "Health Fitness",
    details: "This program is designed for those who exercise only for body fitness, not body building.",
  },
];

 export const Service = () => {
  return (
    <div className="programs-container">
      {servicesData.map((program, index) => (
        <div key={index} className="program-card" onClick={() => alert(`${program.heading} clicked!`)}>
          <span className="icon">{program.icon}</span> {/* Render the icon */}
          <h2>{program.heading}</h2>
          <p>{program.details}</p>
          <button className="join-now-button">Join Now</button>
        </div>
      ))}
    </div>
  );
};
