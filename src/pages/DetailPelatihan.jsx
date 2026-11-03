
import { useParams } from "react-router-dom";
import ProgramPelatihan from "../data/ProgramPelatihan";
import FormPendaftaran from "../components/FormPendaftaran";
import "./DetailPelatihan.css";

function DetailPelatihan({ selectedPelatihan = null }) {
  const { id } = useParams();

  const pelatihan = selectedPelatihan || ProgramPelatihan.find(
    (item) => item.id === Number(id)
  );
  if (!pelatihan) {
    return <h2>Pelatihan tidak ditemukan.</h2>;
  }

  const harga =
    typeof pelatihan.price === "number"
      ? `Rp ${pelatihan.price.toLocaleString("id-ID")}`
      : pelatihan.price || "Hubungi admin";

  return (
    <div className="detail-page">
      <div className="detail-container">

        <div className="detail-layout">

          {/* KOLOM KIRI: DETAIL PELATIHAN */}
          <div className="detail-content">

            <div className="detail-image-wrapper">
              {pelatihan.image && (
                <img
                  src={pelatihan.image}
                  loading="lazy"
                  alt={pelatihan.title}
                  className="detail-image"
                />
              )}
            </div>

            <div className="detail-heading">
              <h1>{pelatihan.title}</h1>
              <p>{pelatihan.description}</p>
            </div>

            {/* INFORMASI PELATIHAN */}
            <div className="detail-information">

              <div className="detail-information-item">
                <h5>Biaya</h5>
                <p>{harga}</p>
              </div>

              <div className="detail-information-item">
                <h5>Durasi</h5>
                <p>{pelatihan.duration || "Belum ditentukan"}</p>
              </div>

              <div className="detail-information-item">
                <h5>Instruktur</h5>
                <p>{pelatihan.instructor || "Belum ditentukan"}</p>
              </div>

            </div>

          </div>

          {/* KOLOM KANAN: FORM PENDAFTARAN */}
          <div className="registration-column">

            <div className="registration-card">
              <h3>Form Pendaftaran</h3>

              <p className="registration-description">
                Silakan lengkapi data diri Anda untuk
                mendaftar pelatihan ini.
              </p>

              <FormPendaftaran pelatihan={pelatihan} />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DetailPelatihan;