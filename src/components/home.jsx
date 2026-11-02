import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import carousel1 from "../assets/carousel1.png";



function Home() {
  return (
    <>
      <div
        className="card text-white w-100 position-relative overflow-hidden border-0"
        style={{ height: "500px" }}
      >
        {/* Gambar Sampul */}
        <img
          src={carousel1}
          className="card-img w-100 h-100 object-fit-cover"
          alt="Sampul PT. Geo Mandiri Kreasi"
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>

        <div className="card-img-overlay d-flex flex-column justify-content-start ">
          <h2 className="card-title mt-auto  fw-bold">PT. Geo Mandiri Kreasi</h2>
          <p className="card-text">
            Training sertifikasi k3 umum, training consultan, training sdm,
            safety training dengan sertifikat resmi kemnaker RI. </p>
            <br />
            <br />
            <p className="fw-bold">(AHLI K3 UMUM,
            AHLI MUDA K3 KONSTRUKSI, AUDITOR SMK 3, PETUGAS P3K, PETUGAS PERAN
            KEBAKARAN (Kelas D), AHLI K3 LISTRIK, TEKNISI K3 LISTRIK, SUPERVISOR
            PERANCAH, AHLI K3 LINGKUNGAN KERJA)</p>
          
          <div className="card-text list-border ">
           
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
