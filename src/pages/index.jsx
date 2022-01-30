import * as React from "react";
import Navigation from "../components/navigation/Navigation.jsx";
import Header from "../components/header/Header.jsx";
import Portfolio from "../components/portfolio/Portfolio.jsx";
import About from "../components/about/About.jsx";
import Footer from "../components/footer/Footer.jsx";

import "./css/styles.css";
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
};

export default IndexPage;
