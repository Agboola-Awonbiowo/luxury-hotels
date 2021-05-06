import React from "react";
import SingleRoom from "./SingleRoom";
import DoubleRoom from "./DoubleRoom";
import TwinRoom from "./TwinRoom";

export default function Rooms() {
  return (
    <div>
      <div className="showcase">
        <img src="../img/pexels-patryk-kamenczak-775219.jpg" alt="" />
      </div>

      <div className="facility-heading">
        <h1>ROOMS AND RATE</h1>
        <div className="rooms-content">
          <div className="container-one">
            <p>
              Each of our bright, light-flooded rooms come with everything you
              could possibly need for a comfortable stay. And yes, comfort isn’t
              our only objective, we also value good design, sleek contemporary
              furnishing complemented by the rich tones of nature’s palette as
              visible from our rooms’ sea-view windows and terraces.
            </p>
          </div>
        </div>
      </div>

      <div className="container-one">
        <div className="m-b">
          <div className="im-h">
            <SingleRoom />
          </div>
        </div>

        <div className="m-b">
          <div className="im-h">
            <DoubleRoom />
          </div>
        </div>

        <div className="m-b">
          <div className="im-h">
            <TwinRoom />
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
