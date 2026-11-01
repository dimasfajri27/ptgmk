import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgramPelatihan from "../data/ProgramPelatihan";

function ContentProglat() {
  // State kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // State untuk input pencarian (Search)
  const [searchTerm, setSearchTerm] = useState("");

  // State untuk menampilkan seluruh card
  const [showAll, setShowAll] = useState(false);

  // Mengambil data dari ProgramPelatihan.js
  const items = ProgramPelatihan;

  // 1. Filter data berdasarkan Kategori DAN kata kunci pencarian (Search)
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    
    // Pencarian berdasarkan judul atau deskripsi pelatihan
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Membatasi jumlah card maksimal 9 jika belum klik "Lihat Lainnya"
  const displayedItems = showAll
    ? filteredItems
    : filteredItems.slice(0, 9);

  // Fungsi ketika kategori dipilih
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  return (
    <>
      <div id="program" className="container mt-4 mb-5">

        <h3 className="mb-3 fw-bold">
          Program Pelatihan
        </h3>

        {/* Baris untuk Search Input & Dropdown Kategori */}
        <div className="row g-3 mb-4 align-items-center">
          
          {/* Kolom Search (Menggunakan form yang Anda berikan) */}
          <div className="col-md-6">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cari program pelatihan..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowAll(false); // Reset tampilan pagination saat mencari
                }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* Kolom Dropdown Filter Kategori */}
          <div className="col-md-6 text-md-end">
            <div className="dropdown d-inline-block">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bidang : {selectedCategory}
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Semua")}
                  >
                    Semua
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Keahlian K3 Umum")}
                  >
                    Keahlian K3 Umum
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Sistem Managemen K3 (SMK3)")}
                  >
                    Sistem Managemen K3 (SMK3)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Ergonomi Lingkungan Kerja dan Bahan Berbahaya")}
                  >
                    Ergonomi Lingkungan Kerja dan Bahan Berbahaya
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Pekerjaan Pada Ketinggian")}
                  >
                    Pekerjaan Pada Ketinggian
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Kesehatan Kerja")}
                  >
                    Kesehatan Kerja
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Listrik")}
                  >
                    Listrik
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Elevator dan Eskalator")}
                  >
                    Elevator dan Eskalator
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Penanggulangan Kebakaran")}
                  >
                    Penanggulangan Kebakaran
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Konstruksi dan Bangunan")}
                  >
                    Konstruksi dan Bangunan
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Pesawat Angkat dan Pesawat Angkut")}
                  >
                    Pesawat Angkat dan Pesawat Angkut
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Pesawat Tenaga dan Produksi")}
                  >
                    Pesawat Tenaga dan Produksi
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Pesawat Uap,Bejana Tekan dan Tangki Timbun")}
                  >
                    Pesawat Uap, Bejana Tekan dan Tangki Timbun
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryChange("Pengelasan")}
                  >
                    Pengelasan
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Grid Card Pelatihan */}
        <div className="row">

          {displayedItems.length > 0 ? (

            displayedItems.map((item) => (

              <div className="col-md-4 mb-4" key={item.id}>

                <div
                  className="card text-white w-100 position-relative overflow-hidden shadow"
                  style={{ height: "300px" }}
                >

                  {/* Gambar Card */}
                  <img
                    src={item.image}
                    className="card-img w-100 h-100 object-fit-cover"
                    alt={item.title}
                  />

                  {/* Overlay Gradasi */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)",
                      pointerEvents: "none",
                    }}
                  ></div>

                  {/* Konten Card */}
                  <div className="card-img-overlay d-flex flex-column justify-content-between">

                    <div>

                      <span className="badge bg-danger mb-2">
                        {item.category}
                      </span>

                      <h4 className="card-title fw-bold">
                        {item.title}
                      </h4>

                      <p
                        className="card-text"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {item.description}
                      </p>

                    </div>

                    {/* Tombol Lihat Detail */}
                    <div className="card-text">

                      <Link
                        to={`/pelatihan/${item.id}`}
                        className="btn btn-primary btn-sm px-3"
                        style={{ transition: "all 0.3s ease" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(-2px)";

                          e.currentTarget.style.boxShadow =
                            "0 4px 12px rgba(0, 0, 0, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform =
                            "translateY(0)";

                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        Lihat Detail
                      </Link>

                    </div>

                  </div>
                </div>

              </div>

            ))

          ) : (

            <div className="col-12">
              <div className="alert alert-warning">
                Tidak ada program pelatihan yang sesuai dengan pencarian Anda.
              </div>
            </div>

          )}

        </div>

        {/* Tombol Lihat Lainnya */}
        {!showAll && filteredItems.length > 9 && (

          <div className="text-center mt-4">

            <button
              onClick={() => setShowAll(true)}
              className="btn px-4 py-2"
              style={{
                backgroundColor: "transparent",
                color: "#0d6efd",
                border: "2px solid #0d6efd",
                borderRadius: "30px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0d6efd";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0d6efd";
              }}
            >
              Lihat Lainnya
            </button>

          </div>

        )}

      </div>
    </>
  );
}

File: ContentProglat.jsx
export default ContentProglat;