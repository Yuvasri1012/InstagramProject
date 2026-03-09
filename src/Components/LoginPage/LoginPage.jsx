import React from "react";
import "./LoginPage.css";
import { auth } from "../Firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successfully ✅");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successfully ✅");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="insta-container">
      {/* Left Section */}
      <div className="insta-left">
        <img
          className="insta-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
        />
        <h1>
          See everyday moments from your <span>close friends</span>.
        </h1>

        <img className="preview-img" src="\LoginImage.png" alt="Preview" />
      </div>

      {/* Right Section */}
      <div className="insta-right">
        <h2>Log into Instagram</h2>

        <input
          type="email"
          placeholder="Mobile number, username or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <label className="or-ptag">Or</label>

        <button className="login-btn" onClick={handleSignup}>
          Signup
        </button>

        <p className="forgot">Forgot password?</p>

        <button className="fb-btn">Log in with Facebook</button>

        <button className="create-btn">Create new account</button>

        <p className="meta">Meta</p>
      </div>
    </div>
  );
};

export default LoginPage;
