
import { useState } from "react";

function FormPendaftaran({ pelatihan }) {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nohp: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nomorAdmin = "6281288465158";

    // Mengambil data pelatihan
    const namaPelatihan = pelatihan?.title || "Pelatihan";
    const hargaPelatihan =
      typeof pelatihan?.price === "number"
        ? `Rp ${pelatihan.price.toLocaleString("id-ID")}`
        : pelatihan?.price || "Hubungi Admin";

    const durasiPelatihan =
      pelatihan?.duration || "Belum ditentukan";

    const instruktur =
      pelatihan?.instructor || "Belum ditentukan";

    // Membuat pesan WhatsApp
    const pesan = `
Halo Admin, saya ingin mendaftar pelatihan.

*Detail Pendaftar:*
- Nama: ${form.nama}
- Email: ${form.email}
- No HP: ${form.nohp}

*Detail Pelatihan:*
- Program: ${namaPelatihan}
- Harga: ${hargaPelatihan}
- Instruktur: ${instruktur}
- Durasi: ${durasiPelatihan}
    `;

    // Membuka WhatsApp
    const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

    // Reset form
    setForm({
      nama: "",
      email: "",
      nohp: ""
    });
  }

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>

        <input
          name="nama"
          type="text"
          placeholder="Nama Lengkap"
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
          className="btn btn-success w-100"
          type="submit"
        >
          Kirim Pendaftaran via WhatsApp
        </button>

      </form>
    </div>
  );
}

export default FormPendaftaran;
