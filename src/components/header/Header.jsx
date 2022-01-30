import * as React from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const Header = () => (
  <header className="header-container text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      {/* <!-- Masthead Avatar Image--> */}
      <img
        className="header-container__logo"
        src="assets/img/logo.jpeg"
        alt="Medicina Integrativo Logo"
      />
      {/* <!-- Masthead Heading--> */}
      {/* <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1> */}
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <FaStar />
        </div>
        <div className="divider-custom-line"></div>
      </div>
      {/* <!-- Masthead Subheading--> */}
      <p className="masthead-subheading font-weight-light mb-0">
        Acupuntura ✹ Ventosaterapia ✹ Massagem Terapêutica ✹ Shiatsu ✹
        Auriculoterapia ✹ Reiki ✹ Reflexologia ✹ Orientação Pessoal
      </p>
    </div>
  </header>
);

export default Header;
