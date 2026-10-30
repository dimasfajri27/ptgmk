import React, { useState } from "react";

function ContentProglat() {
  // State untuk menyimpan kategori yang sedang dipilih (default: 'Semua')
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);
  // Daftar data konten (foto, judul, deskripsi, kategori)
  const items = [
    {
      id: 1,
      title: "Ahli K3 Umum",
      category: "Sertifikasi",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      description:
        "Training sertifikasi ahli K3 umum resmi Kemnaker RI untuk menciptakan lingkungan kerja yang aman dan sesuai standar regulasi.",
    },
    {
      id: 2,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 3,
      title: "Event Manajemen K3 & SMK3",
      category: "Event",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      description:
        "Manajemen acara profesional dan pelatihan khusus auditor SMK3 untuk memastikan operasional perusahaan berjalan lancar.",
    },
    {
      id: 4,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 5,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 6,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 7,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 8,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 9,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 10,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 11,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 12,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 13,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 14,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 15,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 16,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 17,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 18,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 19,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 20,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 21,
      title: "Training Konsultan K3",
      category: "Training",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
  ];

  // Proses filter data berdasarkan kategori yang dipilih pada dropdown
  const filteredItems =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  // Deklarasi displayedItems untuk membatasi jumlah card yang tampil (maksimal 9)
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 9);

  // Fungsi saat kategori diganti agar mereset tampilan kembali ke 9 card pertama
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  return (
    <div className="container mt-4 mb-5">
      <h3 className="mb-3 fw-bold">Daftar Pelayanan & Training</h3>

      {/* Dropdown Button untuk Filter Kategori */}
      <div className="dropdown mb-4">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Kategori: {selectedCategory}
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Semua")}
            >
              Semua
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Sertifikasi")}
            >
              Sertifikasi
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Training")}
            >
              Training
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Event")}
            >
              Event
            </button>
          </li>
        </ul>
      </div>

      {/* Grid untuk Menampilkan Card yang Sesuai Filter */}
      <div className="row">
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              {/* Card dengan Efek Cover & Shadow dari Atas ke Bawah */}
              <div
                className="card text-white w-100 position-relative overflow-hidden shadow"
                style={{ height: "300px" }}
              >
                {/* Gambar Sampul */}
                <img
                  src={item.image}
                  className="card-img w-100 h-100 object-fit-cover"
                  alt={item.title}
                />

                {/* Lapisan Shadow / Gradasi dari Atas ke Bawah */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.1) 100%)",
                    pointerEvents: "none",
                  }}
                ></div>

                {/* Konten Teks di dalam Card */}
                <div className="card-img-overlay d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-danger mb-2">
                      {item.category}
                    </span>
                    <h4 className="card-title fw-bold">{item.title}</h4>
                    <p className="card-text" style={{ fontSize: "0.95rem" }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Tombol Interaktif dengan Efek Hover */}
                  <div className="card-text">
                    <button
                      className="btn btn-primary btn-sm px-3"
                      style={{ transition: "all 0.3s ease" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0, 0, 0, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <small>Lihat Detail</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning">
              Tidak ada konten untuk kategori ini.
            </div>
          </div>
        )}
      </div>

      {/* Tombol "Lihat Lainnya" dengan Background Transparan */}
      {!showAll && filteredItems.length > 9 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="btn px-4 py-2"
            style={{
              backgroundColor: "transparent",
              color: "#0d6efd", // Bisa disesuaikan (misal warna primer biru atau hitam/putih)
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
  );
}

export default ContentProglat;
