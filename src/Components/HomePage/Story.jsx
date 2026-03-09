import React from "react";
import "./HomePage.css";

function Story() {
  return (
    <div className="story-container">
      <div className="story">
        <div className="story-ring">
          <img src="/instaprofile.jpg" alt="Shinchan" />
        </div>
        <p>Shinchan</p>
      </div>
      <div className="story">
        <div className="story-ring">
          <img src="/tomprofile.jpg" alt="Tom & Jerry" />
        </div>
        <p>Tom & Jerry</p>
      </div>
      <div className="story">
        <div className="story-ring">
          <img src="/motupatluprofile.jpg" alt="Motu Patlu" />
        </div>
        <p>Motu Patlu</p>
      </div>
      <div className="story">
        <div className="story-ring">
          <img src="/doraemonprofile.jpg" alt="Doraemon" />
        </div>
        <p>Doraemon</p>
      </div>
      <div className="story">
        <div className="story-ring">
          <img src="/hellokittyprofile.jpg" alt="Hello Kitty" />
        </div>
        <p>Hello Kitty</p>
      </div>
    </div>
  );
}

export default Story;
