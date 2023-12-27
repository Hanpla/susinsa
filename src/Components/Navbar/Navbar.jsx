import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("shop");
    } else if (location.pathname === "/men") {
      setMenu("men");
    } else if (location.pathname === "/women") {
      setMenu("women");
    } else if (location.pathname === "/kids") {
      setMenu("kids");
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div
          className="nav-logo"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
      </Link>
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
