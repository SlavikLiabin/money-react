import React from "react";
import john from "./images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            inventore quibusdam necessitatibus quisquam ab, possimus fugit
            consequatur ea cupiditate id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae,
            necessitatibus laudantium quam rerum neque facere totam, sunt sint
            eveniet fugit, deleniti iste. Beatae, unde dolore ratione neque
            porro molestias?
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
