import React from "react";

function FormPendaftaran({ program, onSubmit, onClose }) {
  const [formData, setFormData] = React.useState({
    nama: "",
    email: "",
    no_hp: "",
    alamat: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      program: program.title,
    });

    setFormData({
      nama: "",
      email: "",
      no_hp: "",
      alamat: "",
    });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-primary text-white">
        <h5>Form Pendaftaran</h5>
      </div>

      <div className="card-body">
        <h5>Program: {program.title}</h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              className="form-control"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Nomor HP</label>
            <input
              type="tel"
              name="no_hp"
              className="form-control"
              value={formData.no_hp}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Alamat</label>
            <textarea
              name="alamat"
              className="form-control"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Daftar Sekarang
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={onClose}
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPendaftaran;