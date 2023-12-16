import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            Men {menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            Women {menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
