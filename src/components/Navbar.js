import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {/* following logic shows home only when the current location is not equal to home */}
              {location.pathname !== "/" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              )}
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
