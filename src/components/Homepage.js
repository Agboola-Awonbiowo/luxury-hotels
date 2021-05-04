import React from "react";

export default function Homepage() {
  return (
    <div>
      <div className="showcase">
        <img src="../img/pexels-jimmy-chan-1458457.jpg" alt="" />
      </div>
      <div className="home-heading">
        <span>All our room types are including complementary breakfast</span>
      </div>

      <div className="main">
        <div className="container">
          <div className="lux-re">
            <div className="linc">
              <div className="line"></div>
              <div className="content">
                <h1>Luxury redefined</h1>
                <div className="content-text">
                  Our rooms are designed to transport you into an environment
                  made for leisure. Take your mind off the day-to-day of home
                  life and find a private paradise for yourself.
                </div>
                <div>
                  <button>EXPLORE</button>
                </div>
              </div>
            </div>
            <div className="right-img">
              <img src="../img/pexels-pixabay-262048.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="lux-re">
            <div className="linc">
              <div className="line-two"></div>
              <div className="content-two">
                <h1>Leave your worries in the sand</h1>
                <div className="content-text">
                  We love life at the beach. Being close to the ocean with
                  access to endless sandy beach ensures a relaxed state of mind.
                  It seems like time stands still watching the ocean.
                </div>
                <div>
                  <button>EXPLORE</button>
                </div>
              </div>
            </div>
            <div className="right-img">
              <img src="../img/pexels-oliver-sjöström-1433052.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="testi">
          <img src="../img/Group 51.png" alt="" />
        </div>
      </div>
    </div>
  );
}
