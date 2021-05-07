import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contact-banner">
        <h1>CONTACT-US</h1>
      </div>

      <div className="contact-header">
        <div className="container-one">
          <h1>WE ARE HERE FOR YOU</h1>
        </div>
      </div>
      <div className="container-one">
        <div className="cont-txt">
          <p>
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="con-mt">
        <div className="container-one">
          <div className="contact-split">
            <div>
              <div className="contact-add">
                <span>497 Evergreen Rd. Roseville, CA 95673</span>
              </div>
              <div className="contact-map">
                <span>View map</span>
              </div>

              <div>
                <div className="contact-number">
                  <span>Phone: +2348163456922</span>
                </div>
                <div className="contact-email">
                  <span>Email: agboolanathaniel@yahoo.com</span>
                </div>
              </div>
            </div>
            <div>
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" />
                <label htmlFor="email">Email Address</label>
                <input type="text" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
