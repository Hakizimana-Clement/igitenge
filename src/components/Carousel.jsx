import React from "react";
import IgitengeImages from "../IgitengeImages";

const [one, two, three] = IgitengeImages;
const { image1 } = one;
const { image2 } = two;
const { image3 } = three;
console.log(image1);

function Carousel() {
  return (
    <div className="col-lg-6 p-0">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-img carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="img-fluid d-block w-100" alt="model" />
          </div>
          <div className="carousel-img carousel-item">
            <img src={image2} className="d-block w-100" alt="model" />
          </div>
          <div className="carousel-img carousel-item">
            <img src={image3} className="d-block w-100" alt="model" />
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
}
export default Carousel;
