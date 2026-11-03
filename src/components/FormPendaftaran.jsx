import { useState } from "react";

function FormPendaftaran({ pelatihan }) {

  const [form, setForm] = useState({
    nama: "",
    email: "",
    nohp: ""
  });

  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();

    // 1. Tentukan nomor WhatsApp admin (Ganti dengan nomor WhatsApp kamu, 
    // Format internasional tanpa tanda +, contoh: 6281234567890)
    const nomorAdmin = "6281288465158"; 

    // 2. Ambil data pelatihan (pastikan properti harga sesuai, misal pelatihan.harga)
    const namaPelatihan = pelatihan?.title || "Pelatihan";
    const hargaPelatihan = pelatihan?.price || "Hubungi Admin";
    const durasiPelatihan = pelatihan?.duration || "Durasi"
    const instruktur = pelatihan?.instructor || instruktur

    // 3. Susun format pesan teks
    const pesan = `Halo Admin, saya ingin mendaftar pelatihan.%0A%0A` +
                  `*Detail Pendaftar:*%0A` +
                  `- Nama: ${form.nama}%0A` +
                  `- Email: ${form.email}%0A` +
                  `- No HP: ${form.nohp}%0A%0A` +
                  `*Detail Pelatihan:*%0A` +
                  `- Program: ${namaPelatihan}%0A` +
                  `- Harga: ${hargaPelatihan}%0A` +
                  `- Instruktur: ${instruktur}%0A` +
                  `- Durasi: ${durasiPelatihan}%0A`;

    // 4. Buka link WhatsApp di tab baru
    window.open(`https://wa.me/${nomorAdmin}?text=${pesan}`, "_blank");

    // 5. Reset form setelah tombol diklik (opsional)
    setForm({
      nama: "",
      email: "",
      nohp: ""
    });
  }

  return (
    <div className="mt-5">
      <h2>Form Pendaftaran</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />

        <input
          name="nohp"
          type="tel"
          placeholder="Nomor HP"
          value={form.nohp}
          onChange={handleChange}
          className="form-control mb-3"
          required
        />

        <button
          className="btn btn-success"
          type="submit"
        >
          Kirim Pendaftaran via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default FormPendaftaran;