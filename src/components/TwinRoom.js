import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function TwinRoom() {
  const [viewMoreIsOpen, setViewMoreIsOpen] = useState(false);
  return (
    <div>
      <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" pause={false}>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/pexels-naim-benjelloun-2029722.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/pexels-jean-van-der-meulen-1457845.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="../img/pexels-engin-akyurt-3688261.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <div className="im-name">
          <h1>Twin ROOM</h1>
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
