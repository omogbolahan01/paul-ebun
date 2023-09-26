import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#B68540",
  };
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-one">
          <h2>Logo</h2>
        </div>
        <div>
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
        </div>
      </div>
      <img src="/images/Line2.png" className="footer-line" />

      <div className="footer-second">
        <div className="footer-text">
          <h3>2023 (c) Edukids foundation</h3>
        </div>
        <div>
          <a href="www.facebook.com">
            <img src="/images/linkedin (3).png" />
          </a>

          <Link>
            <img src="/images/linkedin.png" alt="" />
          </Link>
          <Link>
            <img src="/images/instagram.png" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
