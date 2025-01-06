import { useState } from "react";
import { useSelector } from "react-redux";
import InfoModal from "./InfoModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Card = ({ id, title, image, linkUrl, live, className, technologies }) => {
  const { theme } = useSelector((state) => state.theme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTooltip = (props) => (
    <Tooltip id={`tooltip-${id}`} {...props}>
      Technologies
    </Tooltip>
  );

  return (
    <section>
      <div className={`card ${className}`}>
        <div
          id={`carouselExampleIndicators${id}`}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {image.length > 0 && (
              <div
                className={`carousel-item ${
                  image.length === 1 ? "active" : "active"
                }`}
              >
                <img src={image[0]} className="d-block w-100" alt="Slide 1" />
              </div>
            )}
            {image.length > 1 && (
              <div className="carousel-item">
                <img src={image[1]} className="d-block w-100" alt="Slide 2" />
              </div>
            )}
            {image.length > 2 && (
              <div className="carousel-item">
                <img src={image[2]} className="d-block w-100" alt="Slide 3" />
              </div>
            )}
          </div>
          {image.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleIndicators${id}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleIndicators${id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
        <div
          className={`card-body text-center ${
            theme === "dark" ? "dark-mode" : "light-mode"
          }`}
        >
          <h2 className="d-block fs-2">
            {title}{" "}
            <OverlayTrigger placement="top" overlay={renderTooltip}>
              <a
                href=""
                className="cursor-pointer text-decoration-none"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                <i className="bi bi-info-circle"></i>
              </a>
            </OverlayTrigger>
          </h2>
          <div className="d-flex justify-content-between mt-3">
            <a className="btn btn-dark me-2" href={linkUrl}>
              {"<"}Code{"/>"}
            </a>
            <a className="btn btn-danger flex-fill" href={live}>
              <i className="bi bi-play-fill"></i> Live
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <InfoModal closeModal={closeModal} technologies={technologies} />
        </div>
      )}
    </section>
  );
};

export default Card;
