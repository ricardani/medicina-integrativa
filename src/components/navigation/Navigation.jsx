import * as React from "react";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

const Navigation = () => (
  <nav
    className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink navigation-container"
    id="mainNav"
  >
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        Medicina Integrativa
      </a>
      <button
        className="navbar-toggler text-uppercase font-weight-bold text-white rounded navigation-container__menu_button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">
              Portfólio
            </a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#sobre">
              Sobre
            </a>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contactos">
              Contactos
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
