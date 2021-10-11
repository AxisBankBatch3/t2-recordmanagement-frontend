import React from "react";

const HomeCarousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      
    
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/1600/250"
            class="d-block w-100 rounded-pill"
            alt="CarouselImage"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Delta Bank Ltd</h5>
            <p>we value our customers</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/1600/250?random=2"
            class="d-block w-100 rounded-pill"
            alt="CarouselImage"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Delta Bank Ltd</h5>
            <p>Open a zero balance account with no processing fee</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/1600/250?random=3"
            class="d-block w-100 rounded-pill"
            alt="CarouselImage"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Delta Bank India</h5>
            <p>Find the best offers only at Delta Bank India</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
