import React from "react";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-menu">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6 first-menu">
            <h5 className="menu-header">Shop</h5>
            <ul>
              <li>ELECTRIC BIKES</li>
              <li>HYBRID BIKES</li>
              <li>ROAD BIKES</li>
              <li>GIFT CARDS</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 first-menu">
            <h5 className="menu-header">CONTACT US</h5>
            <ul>
              <li>123-456-7988</li>
              <li>ibike@gmail.com</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 first-menu">
            <h5 className="menu-header">SERVICES</h5>
            <ul>
              <li>BIKE REPAIR</li>
              <li>BIKE TRADE-IN </li>
              <li>HOME-DELIVERY</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 first-menu">
            <h5 className="menu-header">RESOURCES</h5>
            <ul>
              <li>Policies</li>
              <li>Career </li>
              <li>Cotact Us </li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
