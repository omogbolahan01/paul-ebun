import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="top-session">
      <div className="nav-top">
        <h3>Children support Hotline (07030076576)</h3>
      </div>
      <header>
        <img src="/images/Edukids.png" className="home-logo" />

        <nav>
          <NavLink
            to="."
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="Our"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Our Programmes
          </NavLink>

          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
