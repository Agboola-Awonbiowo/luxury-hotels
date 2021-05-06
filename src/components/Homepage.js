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
        <div className="container-one">
          <div className="lux-re">
            <div className="linc">
              <div className="con-lin">
                <div className="linen"></div>
                <div className="conten">
                  <h1 className="h-one">Luxury redefined</h1>
                  <div className="conten-text">
                    Our rooms are designed to transport you into an environment
                    made for leisure. Take your mind off the day-to-day of home
                    life and find a private paradise for yourself.
                  </div>
                  <div>
                    <button>EXPLORE</button>
                  </div>
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
        <div className="container-one">
          <div className="lux-re">
            <div className="linc">
              <div className="con-lin">
                <div className="linen-two"></div>
                <div className="content-two">
                  <h1 className="head-two">Leave your worries in the sand</h1>
                  <div className="conten-text">
                    We love life at the beach. Being close to the ocean with
                    access to endless sandy beach ensures a relaxed state of
                    mind. It seems like time stands still watching the ocean.
                  </div>
                  <div>
                    <button>EXPLORE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-img">
              <img src="../img/pexels-oliver-sjöström-1433052.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="testimo-container">
        <div>
          <div className="teti-head">
            <h1>Testimonials</h1>
          </div>
          <div className="testi-text">
            <span>"Calm, Serena, Retro - What a way to relax and enjoy"</span>
          </div>
          <div className="testi-name">
            <span>Mr. and Mrs. Baxter, UK</span>
          </div>
          <div>
            <button className="testi-boton">
              <i class="fas fa-angle-left"></i>
            </button>

            <button className="testi-boton">
              <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
