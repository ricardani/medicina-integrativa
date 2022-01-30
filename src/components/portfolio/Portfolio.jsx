import * as React from "react";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const portfolioList = [
  {
    id: 1,
    src: "assets/img/portfolio/1.jpeg",
    alt: "",
    name: "LOG CABIN",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
  {
    id: 2,
    src: "assets/img/portfolio/2.jpeg",
    alt: "",
    name: "TASTY CAKE",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
  {
    id: 3,
    src: "assets/img/portfolio/3.jpeg",
    alt: "",
    name: "TASTY CAKE",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
  {
    id: 4,
    src: "assets/img/portfolio/4.jpeg",
    alt: "",
    name: "TASTY CAKE",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
  {
    id: 5,
    src: "assets/img/portfolio/5.jpeg",
    alt: "",
    name: "TASTY CAKE",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
  {
    id: 6,
    src: "assets/img/portfolio/6.jpeg",
    alt: "",
    name: "TASTY CAKE",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Mollitia neque assumenda ipsam nihil, molestias magnam,
    recusandae quos quis inventore quisquam velit asperiores,
    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
    Nam.`,
  },
];

const Portfolio = () => (
  <>
    <section
      className="page-section portfolio portfolio-container"
      id="portfolio"
    >
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfólio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FaStar />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {portfolioList.map((item) => (
            <div className="col-md-6 col-lg-4 mb-5" key={item.id}>
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target={`#portfolioModal${item.id}`}
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <FaPlus />
                  </div>
                </div>
                <img className="img-fluid" src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <!-- Portfolio Modals--> */}
    {portfolioList.map((item) => (
      <div
        className="portfolio-modal modal fade"
        id={`portfolioModal${item.id}`}
        tabIndex="-1"
        aria-labelledby={`portfolioModal${item.id}`}
        aria-hidden="true"
        key={item.id}
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      {item.name}
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <FaStar />
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src={item.src}
                      alt={item.alt}
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default Portfolio;
