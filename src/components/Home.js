import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import bigBike1 from "../images/bigBike1.png";
import bigBike2 from "../images/bigBike2.png";
import bigBike3 from "../images/bigBike3.png";
import carouselImg1 from "../images/carouselImg1.png";
import egg from "../images/egg.jpg";
import firstIntroImage from "../images/firstIntroImage.jpg";
import forest from "../images/forest.jpg";
import kid1 from "../images/kid1.png";
import kid2 from "../images/kid2.png";
import kid3 from "../images/kid3.png";
import kid4 from "../images/kid4.png";
import rectangle from "../images/rectangle.png";
import secondIntroImage from "../images/secondIntroImage.jpg";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="savings">
        <p>🎉🎉🎉Holiday special!!!Free Shipping.See Detail😊😊</p>
      </div>
      <div className="companyPicture">
        <h2 className="bikeHeadingLogo">Zoom Bikes</h2>
      </div>
      <div className="motto">
        <span>
          <em>lets pedal one step at a time</em>
        </span>
        <div className="firstLine"></div>
        <div className="secondLine"></div>
      </div>

      <div>
        <div className="container-fluid col-8 headingOne">
          {" "}
          Shop all products
        </div>
      </div>

      {/* the product carousel is supposed to go here  */}
      {/* from nike website, section used first and then div and list used to show the products  */}
      <hr />
      <div className="kidsBikeButton">
        <button className="btn btn-dark">Shop all kids bike</button>
      </div>

      {/* below is pasted where the carousel is in the html part, check here if err */}
      <div>
        <div>
          <div>
            <div className="row">
              <div className="col-3">
                <img src={kid1} className="d-block w-100" alt="..." />
                <h3 className="bikeModel">Mini Trex 1</h3>
                <p className="bikePrice">$220</p>
              </div>
              <div className="col-3">
                <img src={kid2} className="d-block w-100" alt="..." />
                <h3 className="bikeModel">Dual R2D2</h3>
                <p className="bikePrice">$145</p>
              </div>
              <div className="col-3">
                <img src={kid3} className="d-block w-100" alt="..." />
                <h3 className="bikeModel">Bee M Axe 2 R2D2</h3>
                <p className="bikePrice">$145</p>
              </div>
              <div className="col-3">
                <img src={kid4} className="d-block w-100" alt="" />
                <h3 className="bikeModel">Min E Mouse 1</h3>
                <p className="bikePrice">$145</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <section>
          <div className="kidsBikeButton">
            <button className="btn btn-dark">Shop all instore bike</button>
          </div>
          <div>
            <div>
              <div>
                <div className="row">
                  <div className="col-3">
                    <img src={bigBike1} className="d-block w-100" alt="..." />
                    <h3 className="bikeModel">Dual Shock Gen2</h3>
                    <p className="bikePrice">$220</p>
                  </div>
                  <div className="col-3">
                    <img src={bigBike2} className="d-block w-100" alt="..." />
                    <h3 className="bikeModel">Tri Schok 3</h3>
                    <p className="bikePrice">$145</p>
                  </div>
                  <div className="col-3">
                    <img src={bigBike3} className="d-block w-100" alt="..." />
                    <h3 className="bikeModel">Swoosh Gen2 </h3>
                    <p className="bikePrice">$145</p>
                  </div>
                  <div className="col-3">
                    <img src={bigBike1} className="d-block w-100" alt="" />
                    <h3 className="bikeModel">Little Gen2</h3>
                    <p className="bikePrice">$145</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* remake of the first section */}
        <div className="container first-imageText">
          <div className="col-lg-6 col-md-4 col-sm-6 first-text-section">
            <p>
              {" "}
              Most advanced engineering to provide the best product in the
              market. We take our customer satisfaction very deeply. We have
              made our new products with latest available Vibranium steel in the
              market, giving the lightweight bikes with fastest speed. Making it
              perfect if you are going on mountain or rally or even to ride
              around town.Biking is supposed to be fun, not you pedaling the
              heaviest bike
            </p>
          </div>

          <div className="col-lg-6 col-md-8 col-sm-6 first-image-section">
            <img
              src={firstIntroImage}
              style={{ width: "450px", height: "400px" }}
            ></img>
          </div>
        </div>
        {/* remake of the second section */}
        <div className="container second-imageText">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 text-section">
              <p>
                {" "}
                Most advanced engineering to provide the best product in the
                market. We take our customer satisfaction very deeply. We have
                made our new products with latest available Vibranium steel in
                the market, giving the lightweight bikes with fastest speed.
                Making it perfect if you are going on mountain or rally or even
                to ride around town.Biking is supposed to be fun, not you
                pedaling the heaviest bike
              </p>
            </div>

            <div className="col-lg-8 col-md-8 col-sm-6 image-section">
              <img
                src={secondIntroImage}
                style={{ width: "450px", height: "400px" }}
              ></img>
            </div>
          </div>
        </div>
        {/* third pic to describe the benefits of the bike to the env  */}
        <section className="last-section">
          <div className="container">
            <div className="row heading-subtext"></div>
            <div className="row">
              <div className="image-text">
                <div className="col-lg-4 col-md-4 col-sm-6 text-section">
                  <h4> Did we mention this already?👀</h4>
                  <h5> As Green as it gets</h5>
                  <p>
                    With the rising global warming and pollution caused by
                    buring the gas. You can join us in this movement by atleast
                    riding to work instead of buring the gas that is hurting the
                    planet{" "}
                  </p>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 image-section">
                  <img
                    src={forest}
                    style={{ width: "450px", height: "400px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
