import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="triangle">
        <span className="triangle-up"></span>
      </div>
      <div className="footer">
        <div className="container">
          <div className="inner-foot">
            <div className="address-area">
              <div className="b-name">
                <span className="large">LUXURY</span>
                <span className="small">HOTELS</span>
              </div>

              <div>
                <div className="address">
                  497 Evergreen Rd. Roseville, CA 95673
                </div>
                <div className="phone">+44 345 678 903</div>
                <div className="email">luxury_hotel@gmail.com</div>
              </div>
            </div>

            <div className="about-area">
              <div>About Us</div>
              <div>Contact</div>
              <div>Terms & conditions</div>
            </div>

            <div className="social-area">
              <div>
                <span>
                  <i className="fab fa-facebook-square"></i>{" "}
                </span>
                <span>facebook</span>
              </div>

              <div>
                <span>
                  <i className="fab fa-twitter-square"></i>{" "}
                </span>
                <span>Twitter</span>
              </div>

              <div>
                <span>
                  <i className="fab fa-instagram-square"></i>{" "}
                </span>
                <span>Instagram</span>
              </div>
            </div>
            <div className="sub-area">
              <div>Subscribe to our newsletter</div>
              <div className="sub-form">
                <input type="email" placeholder="Email Address" />
                <div className="btn">
                  <span>Ok</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
