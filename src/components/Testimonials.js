import React from "react";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              dolorem officiis assumenda excepturi quisquam aut quas tempore
              aspernatur mollitia vitae.
            </p>
            <p>
              {" "}
              <span>Johnson.M.J.</span>{" "}
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user2} alt="user" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur molestiae, inventore ex non necessitatibus veniam ea
              incidunt eius nobis repellat?
            </p>
            <p>
              {" "}
              <span>Carol Harper</span>{" "}
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src={user3} alt="user" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem saepe reiciendis fuga officia non iure sed iusto
              perspiciatis atque. In.
            </p>
            <p>
              {" "}
              <span>Snow.J.R.</span>{" "}
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
