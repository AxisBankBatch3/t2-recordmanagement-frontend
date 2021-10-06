import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import picture from "../img/hero-img copy.png";

export const DefaultHome = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <HomeCarousel />
        </div>{" "}
        <div className="row">
          <section id="hero" class="d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div
                  class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Grow your business with Delta bank</h2>
                  <h3>
                    We are team of talented bankers providing all the banking
                    solutions
                  </h3>
                </div>
                <div
                  class="col-lg-6 order-1 order-lg-2 hero-img"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <img src={picture} class="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
