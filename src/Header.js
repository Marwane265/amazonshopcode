// import { Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { FaBeer } from 'react-icons/fa';
function Header() {
  return (
    <nav className="Headerlogowrapper">
      <Link to="/">
        <img
          className="Headerlogo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"
        />
      </Link>
      <input type="text" className="header__searchInput" />
      <FaBeer/>
    </nav>
  );
}
export default Header;
