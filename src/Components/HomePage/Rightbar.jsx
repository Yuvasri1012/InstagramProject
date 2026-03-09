import React from "react";
import "./HomePage.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="suggested-header">
        <h4>Suggested for you</h4>
        <span className="see-all">See All</span>
      </div>

      <div className="suggested-user">
        <img src="/hellokittyprofile.jpg" alt="user" />
        <div className="user-info">
          <span className="username">Hello Kitty</span>
          <span className="sub-text">New to Instagram</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>

      <div className="suggested-user">
        <img src="/noprofile.jpg" alt="user" />
        <div className="user-info">
          <span className="username">It's Me</span>
          <span className="sub-text">Followed by guru</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>

      <div className="suggested-user">
        <img src="/dogprofile.jpg" alt="user" />
        <div className="user-info">
          <span className="username">Dogies</span>
          <span className="sub-text">Suggested for you</span>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
}

export default Rightbar;