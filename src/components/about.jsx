
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HEADER ABOUT */}
      <section className="about-header">
        <h1>Tentang Kami</h1>
        <p>PT. Geo Mandiri Kreasi</p>
        <span>Consultant, Training & Inspection</span>
      </section>

      {/* VISI MISI */}
      <section className="vision-mission">
        <div className="section-title">
          <h2>Visi & Misi</h2>
          <p>
            Komitmen kami dalam memberikan
            pelayanan terbaik dan profesional.
          </p>
        </div>

        <div className="vm-container">

          {/* VISI */}
          <div className="vm-card">
            <div className="vm-icon">◎</div>
            <h3>Visi</h3>
            <p>
              Menjadi perusahaan konsultan,
              pelatihan, dan inspeksi yang
              profesional, terpercaya, serta
              unggul dalam bidang keselamatan
              dan kesehatan kerja.
            </p>
          </div>

          {/* MISI */}
          <div className="vm-card">
            <div className="vm-icon">✦</div>
            <h3>Misi</h3>
            <ul>
              <li>
                Memberikan pelayanan konsultasi
                dan inspeksi secara profesional.
              </li>
              <li>
                Menyelenggarakan pelatihan
                berkualitas dan kompeten.
              </li>
              <li>
                Meningkatkan kesadaran keselamatan
                dan kesehatan kerja.
              </li>
              <li>
                Mengutamakan kepuasan dan
                kepercayaan pelanggan.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* LOKASI KANTOR */}
      <section className="location-section">

        <div className="location-info">
          <span className="location-label">
            OUR LOCATION
          </span>

          <h2>Lokasi Kantor Kami</h2>

          <p>
            Kami siap memberikan pelayanan terbaik
            untuk kebutuhan konsultasi, training,
            dan inspection.
          </p>

          <div className="address-info">
            <span>📍</span>

            <div>
              <h4>PT. Geo Mandiri Kreasi</h4>

              <p>
                JL. Raya Jatiwaringin, Rukan Kaca Hijau
                No. 6-C, Pangkalan Jati, RT.2/RW.13,
                Cipinang Melayu, Kec. Makasar,
                Kota Jakarta Timur, DKI Jakarta 13620.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=JL.+Raya+Jatiwaringin%2C+Rukan+Kaca+Hijau+No.+6-C%2C+Cipinang+Melayu%2C+Jakarta+Timur+13620"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            Lihat Petunjuk Arah →
          </a>
        </div>

        <div className="location-map">
          <iframe
            title="Lokasi PT. Geo Mandiri Kreasi"
            src="https://maps.google.com/maps?q=JL.%20Raya%20Jatiwaringin%2C%20Rukan%20Kaca%20Hijau%20No.%206-C%2C%20Pangkalan%20Jati%2C%20Cipinang%20Melayu%2C%20Jakarta%20Timur%2013620&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>

    </div>
  );
}

export default About;