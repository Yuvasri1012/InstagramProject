import React from "react";
import "./HomePage.css";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaHeart,
  FaUser,
  FaBars,
  FaRegBookmark,
  FaInstagram,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { SiMeta } from "react-icons/si";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <FaInstagram className="instaicon" />
      </div>

      <div className="menu">
        <Link to="/home">
          <div className="menu-item">
            <FaHome className="icon" />
            <span className="text">Home</span>
          </div>
        </Link>

        <div className="menu-item">
          <FaSearch className="icon" />
          <span className="text">Search</span>
        </div>

        <div className="menu-item">
          <FaCompass className="icon" />
          <span className="text">Explore</span>
        </div>

        <div className="menu-item">
          <MdOndemandVideo className="icon" />
          <span className="text">Reels</span>
        </div>

        <div className="menu-item">
          <IoChatbubbleOutline className="icon" />
          <span className="text">Messages</span>
        </div>

        <div className="menu-item">
          <FaHeart className="icon" />
          <span className="text">Notifications</span>
        </div>

        <Link to="/save">
          <div className="menu-item">
            <FaRegBookmark className="icon" />
            <span className="text">Saved</span>
          </div>
        </Link>

        <div className="menu-item">
          <FaUser className="icon" />
          <span className="text">Profile</span>
        </div>
      </div>

      <div className="menu-item more">
        <FaBars className="icon" />
        <span className="text">More</span>
      </div>

      <div className="menu-item more">
        <SiMeta className="icon" />
        <span className="text">Also from Meta</span>
      </div>
    </div>
  );
}

export default Sidebar;
