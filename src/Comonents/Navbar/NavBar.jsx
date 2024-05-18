import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import MyOrder from "../YourOrders/MyOrder";
function NavBar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, logindone } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>YumYard</h1>
      </Link>
      <ul className="navbar-menu">
        <Link to="/">Home</Link>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          {logindone ? "Welcome back" : "Sign Up"}
        </button>

        <Link to={"/myorder"}>{logindone?<button style={{border:"2px solid blue"}}>MyOrders</button>:""}</Link>
      </div>
    </div>
  );
}

export default NavBar;
