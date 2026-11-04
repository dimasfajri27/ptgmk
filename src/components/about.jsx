
import React from 'react';
import { ShieldCheck, 
          Users,
          Wrench, 
          Building2,
          Eye,
        Target} from 'lucide-react';
import "./about.css";

const About = () => {
  return (
    <section  id="about" className="py-5 bg-light">
      <div className="container py-4">
        
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-danger bg-gradient px-3 py-2 rounded-pill fs-6 mb-2">
              About Us
            </span>
            <h2 className="fw-bold display-5 text-dark">
              PT Geo Mandiri Kreasi
            </h2>
            <p className="lead text-muted fw-normal fs-4">
              "We Serve You Better in Safety"
            </p>
            <hr className="w-25 mx-auto border-danger border-2 opacity-100 mt-3" />
          </div>
        </div>

        {/* Highlight Banner / Card utama */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center g-4">
                  <div className="col-lg-7">
                    <h3 className="fw-bold text-dark mb-3">
                      Mitra Terpercaya untuk K3, Konsultan & Layanan Industri
                    </h3>
                    <p className="text-secondary lh-lg mb-0">
                      PT. Geo Mandiri Kreasi (Geo Mandiri Group) adalah perusahaan penyedia jasa terkemuka yang berfokus pada <strong>Management Consultant, Training Centre, Safety Inspection,</strong> dan <strong>Event Management</strong>. Dengan pengalaman lebih dari 15 tahun, kami berkomitmen mendampingi perusahaan Anda dalam menciptakan lingkungan kerja yang aman, sesuai regulasi, dan berstandar tinggi.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="bg-light rounded-4 p-4 border border-1">
                      <h5 className="fw-bold text-dark mb-3">Legalitas & Identitas</h5>
                      <ul className="list-unstyled mb-0 text-secondary small lh-lg">
                        <li className="d-flex justify-content-between mb-1">
                          <span>Brand:</span>
                          <strong className="text-dark">GEO MANDIRI GROUP</strong>
                        </li>
                        <li className="d-flex justify-content-between mb-1">
                          <span>Kantor Pusat:</span>
                          <strong className="text-dark">Jakarta Timur</strong>
                        </li>
                        <li className="d-flex justify-content-between mb-1">
                          <span>Sertifikasi:</span>
                          <strong className="text-dark">Kemnaker RI & BNSP</strong>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Akta Notaris:</span>
                          <strong className="text-dark">No. 09 (22 Des 2017)</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <section className="vision-mission-banner">
          <div className="vision-mission-title">
            <span></span>
            <h2>Visi & Misi</h2>
            <span></span>
          </div>

          <div className="row align-items-center g-4">

            {/* bagian visi */}
            <div className="col-lg-6">
              <div className="vision-content">
                

                <div className="vm-text">
                  <span className="vm-label">Visi</span>

                  <p>
                    Menjadi perusahaan konsultan, training, dan inspeksi yang terdepan dan andal dengan kualitas pelayanan terbaik di bidangnya.
                  </p>
                </div>

              </div>
            </div>
            {/* bagian misi */}
            <div className="col-lg-6">
              <div className="mission-content">
                <div className="vm-text">
                  <span className="vm-label">Misi</span>
                  <p>Melayani pelanggan dengan kualitas produk 
                    terbaik serta menjadikan jasa yang kami berikan sebagai layanan teratas di bidangnya.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Utama Grid */}
        <div className="row mb-4">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold text-dark">Layanan Unggulan Kami</h3>
            <p className="text-muted">Solusi komprehensif untuk kebutuhan keselamatan dan pengembangan industri</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center transition-hover">
              <div className="card-body">
                <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex p-3 mb-3">
                  <ShieldCheck size={32} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-2">Safety Training</h5>
                <p className="card-text text-muted small">
                  Pembinaan dan sertifikasi resmi Kemnaker RI & BNSP untuk Ahli K3 Umum, Konstruksi, Listrik, Kebakaran, dan Lingkungan Kerja.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center transition-hover">
              <div className="card-body">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex p-3 mb-3">
                  <Building2 size={32} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-2">Konsultan Perencanaan</h5>
                <p className="card-text text-muted small">
                  Layanan pengurusan SLF, studi AMDAL/UKL-UPL, Master Plan kawasan, hingga perancangan arsitektur & teknik sipil.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center transition-hover">
              <div className="card-body">
                <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex p-3 mb-3">
                  <Wrench size={32} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-2">Riksa Uji & Inspeksi</h5>
                <p className="card-text text-muted small">
                  Pemeriksaan teknis dan sertifikasi peralatan kerja: bejana tekan, pesawat angkat/angkut, instalasi listrik, hingga NDT.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center transition-hover">
              <div className="card-body">
                <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex p-3 mb-3">
                  <Users size={32} />
                </div>
                <h5 className="card-title fw-bold text-dark mb-2">SDM & Event Management</h5>
                <p className="card-text text-muted small">
                  Pelatihan soft skill, leadership, team building, serta penyelenggaraan corporate event & family gathering profesional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-white text-dark rounded-4 p-4 p-md-5 shadow">
              <div className="row text-center g-4">
                <div className="col-6 col-md-3">
                  <h2 className="fw-bold text-warning mb-1">15+</h2>
                  <p className="text-secondary mb-0 small">Tahun Pengalaman</p>
                </div>
                <div className="col-6 col-md-3">
                  <h2 className="fw-bold text-warning mb-1">100+</h2>
                  <p className="text-secondary mb-0 small">Program Pelatihan</p>
                </div>
                <div className="col-6 col-md-3">
                  <h2 className="fw-bold text-warning mb-1">1000+</h2>
                  <p className="text-secondary mb-0 small">Alumni & Peserta</p>
                </div>
                <div className="col-6 col-md-3">
                  <h2 className="fw-bold text-warning mb-1">100%</h2>
                  <p className="text-secondary mb-0 small">Komitmen Keselamatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;