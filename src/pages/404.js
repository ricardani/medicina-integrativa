import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 520,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Página não encontrada</title>
      <h1 style={headingStyles}>Página não encontrada</h1>
      <img
        className="img-fluid rounded mb-5"
        src="assets/img/404.jpeg"
        alt="404"
      />
      <p style={paragraphStyles}>
        <Link to="/">Voltar para a página principal</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
