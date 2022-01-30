import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Footer = () => (
  <footer className="footer text-center" id="contactos">
    <div className="container">
      <div className="row">
        {/* <!-- Footer Location--> */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Localização</h4>
          <p className="lead mb-0">
            Av. Dr. Domingos Gonçalves de Sá 434, Loja 11
            <br />
            4435-213 Rio Tinto, Portugal
          </p>
        </div>
        {/* <!-- Footer Social Icons--> */}
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Redes Sociais</h4>
          <a className="btn btn-outline-light btn-social mx-1" href="#!">
            <FaFacebookF />
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!">
            <FaInstagram />
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!">
            <FaTwitter />
          </a>
          <a className="btn btn-outline-light btn-social mx-1" href="#!">
            <FaLinkedin />
          </a>
        </div>
        {/* <!-- Footer About Text--> */}
        <div className="col-lg-4">
          <h4 className="text-uppercase mb-4">Horários</h4>
          <p className="lead mb-0">
            Seg. a Sex.: 08h00 às 21h00
            <br />
            Sábado: 08h00 às 19h00
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
