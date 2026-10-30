import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import carousel4 from "../assets/carousel4.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";


function Home() {
  return (
    <>
      <div
        className="card text-white w-100 position-relative overflow-hidden"
        style={{ height: "500px" }}
      >
        {/* Gambar Sampul */}
        <img
          src={carousel4}
          className="card-img w-100 h-100 object-fit-cover"
          alt="Sampul PT. Geo Mandiri Kreasi"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>

        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <h2 className="card-title fw-bold">PT. Geo Mandiri Kreasi</h2>
          <p className="card-text">
            Training sertifikasi k3 umum, training consultan, training sdm,
            safety training dengan sertifikat resmi kemnaker RI. (Ahli k3 umum,
            Ahli muda k3 kontruksi, Auditor SMK3, Petugas p3k, Petugas Peran
            Kebakaan (Kelas D), Ahli k3 Listrik Teknisi K3 Listrik, Supervisor
            Perancah, Ahli k3 lingkungan Kerja)
          </p>
          <div className="card-text list-border ">
            <button
              className="btn btn-primary btn-sm fw-bold list-border-none"
              style={{
                transition: "all 0.3s ease",
              }}
            >
              <a className="text-decoration-none text-white" href="#"><small>Program Latihan</small></a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
