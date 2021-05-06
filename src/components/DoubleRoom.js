import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function DoubleRoom() {
  const [viewMoreIsOpen, setViewMoreIsOpen] = useState(false);
  return (
    <div>
      <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" pause={false}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/pexels-max-vakhtbovych-6186815.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/house-method-CqVHT8g45R8-unsplash.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/alexander-kaunas-Fk9d0cxYqC4-unsplash.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <div className="im-name">
          <h1>DOUBLE ROOM</h1>
        </div>
        <div className="container-two">
          <div className="view-more">
            {viewMoreIsOpen ? (
              <div
                className="open-sidebar"
                onClick={() => setViewMoreIsOpen(false)}
              >
                <span>
                  <i class="fas fa-minus-circle"></i>
                </span>
                <span className="view-name">VIEW ROOM DETAILS</span>
              </div>
            ) : (
              <div
                className="open-sidebar"
                onClick={() => setViewMoreIsOpen(true)}
              >
                <span>
                  <i className="fas fa-plus-circle"></i>
                </span>
                <span className="view-name">VIEW ROOM DETAILS</span>
              </div>
            )}

            <div>
              <button>$149 Avg/night</button>
            </div>
          </div>
          <section className={viewMoreIsOpen ? "open" : ""}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              ratione officia dolor laudantium cum recusandae non praesentium?
              Voluptatem, obcaecati. Fugit est accusamus totam ducimus,
              doloremque labore voluptate iste ad cumque impedit quasi incidunt
              exercitationem, quod optio in blanditiis, dolorem fugiat! Dolores,
              veniam. Incidunt delectus quidem pariatur similique quos modi
              ipsum.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
