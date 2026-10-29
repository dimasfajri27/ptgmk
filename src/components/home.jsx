<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import gambar from "./img/images.png"


function Home() {
    return (
        <>
            <div className="container mt-5">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-4">
                        <h1 className="display-5 fw-bold">
                            Selamat Datang di Website Saya
                        </h1>

                        <p>
                            Ini adalah halaman Home yang dibuat menggunakan
                            React dan Bootstrap.
                        </p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem " }}>
                    <img src={gambar} className="card-img-top gambar-card" alt="gmbarnya" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Home;
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";

function Home() {
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={carousel1} class="d-block w-50 h-50 mx-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block justify-content-center">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={carousel2} class="d-block w-50 h-50 mx-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block justify-content-center">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-50 h-50 mx-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block justify-content-center">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Home;
>>>>>>> f5548dd31d56f3811161fd95b81488d2d5eef2a6
