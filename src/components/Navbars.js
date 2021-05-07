import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbars() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <div>
      <div className="head">
        <div className="name">
          <h1>LUXURY</h1>
          <span>HOTELS</span>
        </div>

        <span
          type="button"
          onClick={() => setSidebarIsOpen(true)}
          className="open-hamburger"
        >
          <i className="fa fa-bars"></i>
        </span>
        <aside className={sidebarIsOpen ? "open" : ""}>
          <div className="nav-li">
            <span
              className="close-sidebar"
              onClick={() => setSidebarIsOpen(false)}
              type="button"
            >
              <i className="fa fa-close"></i>
            </span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/facility">Facilities</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/contact">Contact-us</Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
