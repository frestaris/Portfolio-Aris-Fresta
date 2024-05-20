import React from "react";

const Card = ({ id, title, image, linkUrl }) => {
  return (
    <section>
      <div className="card">
        <div
          id={`carouselExampleIndicators${id}`}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target={`#carouselExampleIndicators${id}`}
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target={`#carouselExampleIndicators${id}`}
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target={`#carouselExampleIndicators${id}`}
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image[0]} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={image[1]} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={image[2]} className="d-block w-100" alt="Slide 1" />
            </div>
          </div>
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
        </div>
        <div className="card-body text-center">
          <h2 className="d-block fs-2" href="#">
            {title}
          </h2>
          <a className="btn w-100 btn-dark mt-3" href={linkUrl}>
            Check the {"< >"}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Card;
