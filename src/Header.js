import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import search from "./sicon.svg";
import shoppingopen from "./shoppingopen.svg";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  return (
    <nav className="Headerlogowrapper">
      <Link className="navlink" to="/">
        <img
          className="Headerlogo"
          alt="logo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
        />
        <div className="header__searchInputwrapper">
          <input type="text" className="header__searchInput" />
          <img className="Search" alt="search" src={search}></img>
        </div>
        <div className="header__nav">
          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Marwane</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <span className="sbasket">
                <img
                  className="shoppingbasket"
                  alt="winkelmandje"
                  src={shoppingopen}
                />
              </span>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </Link>
    </nav>
  );
}
export default Header;
