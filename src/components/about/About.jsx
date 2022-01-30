import React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const About = () => (
  <section className="page-section text-white mb-0 about-container" id="sobre">
    <div className="container">
      {/* <!-- About Section Heading--> */}
      <h2 className="page-section-heading text-center text-uppercase text-white">
        Sobre
      </h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FaStar />
        </div>
        <div className="divider-custom-line"></div>
      </div>
      {/* <!-- About Section Content--> */}
      <div className="row">
        <div className="col-lg-4 ms-auto">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            feugiat ex. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
        </div>
        <div className="col-lg-4 me-auto">
          <p className="lead">
            Cras volutpat libero ultricies nibh faucibus eleifend. Nam congue
            rhoncus maximus. Sed fermentum ornare orci, vel vulputate nulla
            rutrum id. Duis at varius augue, in malesuada felis.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
