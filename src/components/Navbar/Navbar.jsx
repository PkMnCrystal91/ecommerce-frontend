import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import nav_dropdown from "../assets/nav_dropdown.png";
import cart_icon from "../assets/cart_icon.png";

import "./Navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  console.log(menu);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>SHOPPER</p>
      </div>
      <img className="nav-dropdown" src={nav_dropdown} alt="" />
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="womens">
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count"></div>
      </div>
    </nav>
  );
};
