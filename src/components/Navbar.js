import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bikes">
                  Bikes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apparel">
                  Apparel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accessories">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
