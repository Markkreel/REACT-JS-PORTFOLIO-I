import React from "react";
import "./Navbar.css";

function NavBarComponent() {
  return (
    <section id="navbar_id">
      <div className="navbar-container">
        <div className="navbar-profile"></div>
        <div className="navbar-info">
          <h1 className="navbar-name">Glad you're here!</h1>
        </div>
        <div className="navbar-menu-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NavBarComponent;
