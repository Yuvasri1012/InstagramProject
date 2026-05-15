import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../Firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function friendlyError(code) {
  const map = {
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/email-already-in-use": "This email is already registered.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/too-many-requests": "Too many attempts. Please try later.",
    "auth/network-request-failed": "Network error. Check your connection.",
  };
  return map[code] || "Something went wrong. Please try again.";
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const navigate = useNavigate();

  function validate() {
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return false;
    }
    if (isSignup && !username.trim()) {
      setError("Please enter a username.");
      return false;
    }
    if (isSignup && username.trim().length < 3) {
      setError("Username must be at least 3 characters.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  }

  const handleLogin = async () => {
    setError("");
    if (!validate()) return;
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, {
        displayName: username.trim(),
      });
      navigate("/home");
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <img className="preview-img" src="/LoginImage.png" alt="Preview" />
        </div>

        {/* Right Section */}
        <div className="insta-right">
          <h2>{isSignup ? "Sign Up for Instagram" : "Log into Instagram"}</h2>

          {error && <p className="error-msg">{error}</p>}

          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              disabled={loading}
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            disabled={loading}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            disabled={loading}
            onKeyDown={(e) =>
              e.key === "Enter" && (isSignup ? handleSignup() : handleLogin())
            }
          />

          {/* Show Login or Signup button based on toggle */}
          {isSignup ? (
            <button
              className="login-btn signup-variant"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Please wait…" : "Sign Up"}
            </button>
          ) : (
            <button
              className="login-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Please wait…" : "Login"}
            </button>
          )}

          {/* Toggle between Login and Signup */}
          <p className="toggle-msg">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsSignup(!isSignup);
                setError("");
                setUsername("");
              }}
            >
              {isSignup ? "Log in" : "Sign up"}
            </span>
          </p>

          {!isSignup && <p className="forgot">Forgot password?</p>}
          <button className="fb-btn">Log in with Facebook</button>
          <p className="meta">Meta</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
