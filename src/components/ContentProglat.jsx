import React, { useState } from "react";
import FormPendaftaran from "./FormPendaftaran";

function ContentProglat() {
  // State untuk menyimpan kategori yang sedang dipilih (default: 'Semua')
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAll, setShowAll] = useState(false);
  // Daftar data konten (foto, judul, deskripsi, kategori)
  const [selectedProgram, setSelectedProgram] = useState(null);

const [dataPendaftar, setDataPendaftar] = useState([]);

const handleSubmitPendaftaran = (data) => {
  setDataPendaftar((prev) => [...prev, data]);

  console.log("Data Pendaftar:", [
    ...dataPendaftar,
    data,
  ]);

  setSelectedProgram(null);
};

  const items = [
    {
      id: 1,
      title: "Ahli K3 Umum",
      category: "Keahlian-K3-Umum",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      description:
        "Training sertifikasi ahli K3 umum resmi Kemnaker RI untuk menciptakan lingkungan kerja yang aman dan sesuai standar regulasi.",
    },
    {
      id: 2,
      title: "Auditor SMK3",
      category: "Sistem-Managemen-K3-(SMK3)",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 3,
      title: "Ahli K3 Kimia",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      description:
        "Manajemen acara profesional dan pelatihan khusus auditor SMK3 untuk memastikan operasional perusahaan berjalan lancar.",
    },
    {
      id: 4,
      title: "Petugas K3 Kimia",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 5,
      title: "Ahli K3 Muda Lingkungan",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 6,
      title: "Teknisi Ruang Terbatas",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 7,
      title: "Petugas K3 Penyelamatan",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 8,
      title: "Teknisi K3 Deteksi Gas",
      category: "Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 9,
      title: "Tenaga Kerja Bangunan Tingkat Tinggi 2",
      category: "Pekerjaan-Pada-Ketinggian",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 10,
      title: "Tenaga Kerja Pada Ketinggian Tingkat 1",
      category: "Pekerjaan-Pada-Ketinggian",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 11,
      title: "Tenaga Kerja Pada Ketinggian Tingat 2",
      category: "Pekerjaan-Pada-Ketinggian",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 12,
      title: "Petugas P3K di Tempat Kerja",
      category: "Kesehatan-Kerja",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 13,
      title: "Hyperkes Untuk Paramedis",
      category: "Kesehatan-Kerja",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 14,
      title: "Hyperkes Untuk Dokter",
      category: "Kesehatan-Kerja",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 15,
      title: "K3 Rumah Sakit",
      category: "Kesehatan-Kerja",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 16,
      title: "Ahli K3 Listrik",
      category: "Listrik",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 17,
      title: "Teknisi Listrik",
      category: "Listrik",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 18,
      title: "Ahli K3 Elevator dan Eskalator",
      category: "Elevator-dan-Eskalator",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 19,
      title: "Teknisi Elevator dan Eskalator",
      category: "Elevator-dan-Eskalator",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 20,
      title: "Operator Elevator dan Eskalator",
      category: "Elevator-dan-Eskalator",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 21,
      title: "Ahli K3 Spesialis Kebakaran Tingkat A",
      category: "Penanggulangan-Kebakaran",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 22,
      title: "Petugas (Koordinator) Kebakaran Tingkat B",
      category: "Penanggulangan-Kebakaran",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 23,
      title: "Petugas (Regu) Kebakaran Tingkat C",
      category: "Penanggulangan-Kebakaran",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 24,
      title: "Petugas (Peran) Kebakaran Tingkat D",
      category: "Penanggulangan-Kebakaran",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 25,
      title: "Ahli K3 Madya Konstruksi",
      category: "Konstruksi-dan-Bangunan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 26,
      title: "Ahli K3 Muda Konstruksi",
      category: "Konstruksi-dan-Bangunan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 27,
      title: "Supervisi Perancah",
      category: "Konstruksi-dan-Bangunan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 28,
      title: "Teknisi Perancah",
      category: "Konstruksi-dan-Bangunan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 29,
      title: "Ahli K3 Pesawat Angkat dan Pesawat Angkut",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 30,
      title: "Teknisi Pesawat Angkat dan Pesawat Angkut",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 31,
      title: "Operator Overhead Crane Kelas 1",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 32,
      title: "Operator Overhead Crane Kelas 2",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 33,
      title: "Operator Overhead Crane Kelas 3",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 34,
      title: "Operator Forklift Kelas 1",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 35,
      title: "Operator Forklift Kelas 2",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 36,
      title: "Operator Alat Berat",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 37,
      title: "Juru Ikat (Ringger), Pita Transport(Conveyor)",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 38,
      title: "Operator Gondala",
      category: "Pesawat-Angkat-dan-Pesawat-Angkut",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 39,
      title: "Ahli K3 Pesawat Tenaga dan Produksi",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 40,
      title: "Teknisi Pesawat Tenaga dan Produksi",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 41,
      title: "Operator Penggerak Mula (Motor Diesel, Turbin)",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 42,
      title: "Operator Mesin Produksi dan Perkakas Kelas 1",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 43,
      title: "Operator Mesin Produksi dan Perkakas Kelas 2",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 44,
      title: "Operator Tanur Kelas 1",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 45,
      title: "Operator Tanur Kelas 2",
      category: "Pesawat-Tenaga-dan-Produksi",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 46,
      title: "Ahli K3 Pesawat Uap Bejana dan Tekan",
      category: "Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 47,
      title: "Teknisi Pesawat Uap",
      category: "Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 48,
      title: "Teknisi Tangki Timbun dan Bejana Tekan",
      category: "Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 49,
      title: "Operator Boiler Kelas 1",
      category: "Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 50,
      title: "Operator Boiler Kelas 2",
      category: "Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 51,
      title: "Juru Las GTAW/GMAW Kelas 1",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 52,
      title: "Juru Las GTAW/GMAW Kelas 2",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
     {
      id: 53,
      title: "Juru Las GTAW/GMAW Kelas 3",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 54,
      title: "Juru Las Listrik/SMAW Kelas 1",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 55,
      title: "Juru Las Listrik/SMAW Kelas 2",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 56,
      title: "Juru Las Listrik/SMAW Kelas 3",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 57,
      title: "Juru Las Kombinasi GMAW/SMAW Kelas 1",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 58,
      title: "Juru Las Kombinasi GMAW/SMAW Kelas 2",
      category: "Pengelasan",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=600&q=80",
      description:
        "Pelatihan dan konsultasi mendalam mengenai penerapan sistem manajemen keselamatan serta audit di perusahaan.",
    },
    {
      id: 59,
      title: "Juru Las Kombinasi GMAW/SMAW Kelas 3",
      category: "Pengelasan",
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
    <>
    {selectedProgram && (
  <FormPendaftaran
    program={selectedProgram}
    onSubmit={handleSubmitPendaftaran}
    onClose={() => setSelectedProgram(null)}
  />
)}
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
          Bidang :{selectedCategory}
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
              onClick={() => setSelectedCategory("Keahlian-K3-Umum")}
            >
              Keahlian K3 Umum
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Sistem-Managemen-K3-(SMK3)")}
            >
              Sistem Managemen K3 (SMK3)
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Ergonomi-Lingkungan-Kerja-dan-Bahan-Berbahaya")}
            >
              Ergonomi Lingkungan Kerja dan Bahan Berbahaya
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Pekerjaan-Pada-Ketinggian")}
            >
              Pekerjaan Pada Ketinggian
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Kesehatan-Kerja")}
            >
              Kesehatan Kerja
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Listrik")}
            >
              Listrik
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Elevator-dan-Eskalator")}
            >
              Elevatro dan Eskalator
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Penanggulangan-Kebakaran")}
            >
              Penanggulangan Kebakaran
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Konstruksi-dan-Bangunan")}
            >
              Konstruksi dan Bangunan
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Pesawat-Angkat-dan-Pesawat-Angkut")}
            >
              Pesawat Angkat dan Pesawat Angkut
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Pesawat-Tenaga-dan-Produksi")}
            >
              Pesawat Tenaga dan Produksi
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Pesawat-Uap,Bejana-Tekan-dan-Tangki-Timbun")}
            >
              Pesawat Uap,Bejana Tekan dan Tangki Timbun
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setSelectedCategory("Pengelasan")}
            >
              Pengelasan
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
                      onClick={() => setSelectedProgram(item)}
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
    </>
  );
}

export default ContentProglat;
