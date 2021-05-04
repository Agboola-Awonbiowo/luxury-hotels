import React from "react";
import { Link } from "react-router-dom";
export default function Navbars() {
  return (
    <div>
      <div className="head">
        <div className="name">
          <h1>LUXURY</h1>
          <span>HOTELS</span>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/facility">Facilities</Link>
            </li>
            <li>Rooms</li>
            <li>Contact-us</li>
          </ul>
        </div>
      </div>

      <div className="welcome-note">
        <span className="one">WELCOME TO</span>
        <span className="two">LUXURY</span>
        <span className="three">HOTELS</span>
        <span className="four">
          Book your stay and enjoy luxury <br /> redefined at the most
          affordable rates.
        </span>
      </div>

      <div className="book">
        <img src="../img/Book now.png" alt="" />
      </div>
    </div>
  );
}
