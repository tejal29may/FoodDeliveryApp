

import React, { useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { StoreContext } from "../../Context/StoreContext";

import app from "../../Pages/Firebase/Firebase";
function LoginPopUp({ setShowLogin }) {
  const auth = getAuth();
  const navigate = useNavigate(); // Access the navigate function from react-router-dom
  const [currentState, setCurrentState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logindone, setLoginDone } = useContext(StoreContext);

  // Enable session persistence
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Session persistence successfully enabled
    })
    .catch((error) => {
      // Handle error
      console.error("Error enabling session persistence:", error);
    });

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("User created successfully!");
      navigate("/dashboard"); // Redirect to dashboard after successful signup
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      alert("User logged in successfully!");
      navigate("/")
      setShowLogin(false)
      setLoginDone(true)
      // Redirect to dashboard after successful login
    } catch (err) {
      console.log("error", err);
      alert("Incorrect credentials")
    }
  };

  return (
    <>
      <div className="login-pop-up">
        <form action="" className="login-pop-up-container">
          <div className="login-pop-up-title">
            <h2>{currentState}</h2>
            <img
              src={assets.cross_icon}
              alt=""
              onClick={() => {
                setShowLogin(false);
              }}
            />
          </div>
          <div className="login-pop-up-inputs">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your Name" required />
            )}
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={currentState === "Login" ? handleLogin : handleSignUp}>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-pop-up-condition">
            {/* <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p> */}
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new Account?
              <span
                onClick={() => {
                  setCurrentState("Sign Up");
                }}
              >
                Click Here
              </span>
            </p>
          ) : (
            <p>
              Already Have an Account?
              <span
                onClick={() => {
                  setCurrentState("Login");
                }}
              >
                Login Here
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default LoginPopUp;
