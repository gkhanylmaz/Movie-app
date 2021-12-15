import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="sdibar">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner d-flex">
          {movies?.Search?.map((movie, index) => (
            <div className="carousel-item image-container d-flex justify-content-start m-3">
              <img src={movie.Poster} alt="movie" />
              <div className="overlay d-flex align-items-center justify-content"></div>
            </div>
          ))}
          
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default MovieList;
