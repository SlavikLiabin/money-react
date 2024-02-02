import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="col-1">
          <p>More Than 100 Financial Planners</p>
          <p>One Philosophy</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            obcaecati omnis velit quis incidunt, consequatur nobis eaque
            repellat quasi soluta quae mollitia aut aspernatur vel veritatis
            debitis magni nostrum minus vero, qui id delectus saepe asperiores.
            Repellendus ad facere error!
          </p>
          <button className="button">Get your free financial analysis</button>
        </div>
        <div className="col-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ntAI_mw9sl4?si=NaZOT7zehrQhZ8x0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
