import React from "react";
import "./Navbar.css"; // Optional for additional custom styling
import Navbar_logo from "../../assets/logo/Navbar-logo.png";
import icon from "../../assets/logo/External-Link.svg";
import account from "../../assets/logo/Account.png";
import Open from "../../assets/logo/Open.png";

const Navbar = () => {
  return (
    <div className="logo-container">
      <div className="con-one">
        <div className="logo">
          <img src={Navbar_logo} alt="United-logo" />
        </div>
        <div className="second-section">
          <div className="website-link">
            <p>RETURN TO UNITEDRUGBY.COM</p>
            <img src={icon} alt="" />
          </div>
          <div className="media-section">
            <h1 className="Media-centre-text">MEDIA CENTRE</h1>
            {/* User Section */}
            <div className="user-section">
              <img src={account} alt="" />
              <a href="#">MY URC</a>
            </div>
          </div>
        </div>
      </div>
      <div className="link-search">
        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#">
              NEWS <img src={Open} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              SEASON <img src={Open} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              ALL TEAMS <img src={Open} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              ROUND <img src={Open} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              FIXTURE <img src={Open} alt="" />
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
