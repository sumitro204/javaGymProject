import "./About.css";
import Gym1 from "../assets/Gym1.png";
export const About = () => {
  return (
    <div>
      <div className = "left-r">
      <span className="Head">Welcome to the Fit Family!</span>
      <br />
      <div className="message">
        <br />
        We believe the quality of our health determines the quality <br />
        of our lives—and nothing is more important than that.
        <br />
        Fitness is about strengthening and conditioning your <br />
        body and mind so you can explore the world, seek new adventures, <br />
        and be the person you were meant to be. If you want to be healthy and
        happy, we want to help! At Zest Fitness Studio, <br />
        we believe getting fit should be fun, varied, and done with friends.
        <br />
        Being part of a community of like-minded individuals allows us to
        support each other, share experiences, and celebrate successes. <br />
        There’s no one 'right' way to train. Your goals are unique, which is why
        we offer various program options. Whether you’re looking to get fit,
        <br />
        get strong, or fuel your competitive fire, we have a program tailored
        for you. <br />
        We listen to what you’re looking to achieve and help lay out the best
        path to get there.
        <br />
        No prior experience is required—just bring your energy and enthusiasm!
      </div>
    </div>
     
      <div className="right-r">


      <img src={Gym1} alt="Hero" className="gym1" />
        
      </div>
        
  

    </div>
  );
};
