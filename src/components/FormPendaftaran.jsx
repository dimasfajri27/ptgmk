import { useState } from "react";

function FormPendaftaran({ pelatihan }) {

  const [form, setForm] = useState({
    nama: "",
    email: "",
    nohp: ""
  });

  const [pendaftar, setPendaftar] = useState([]);

  function handleChange(e){

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e){

    e.preventDefault();

    const dataBaru = {
      ...form,
      pelatihan: pelatihan.title
    };

    setPendaftar([
      ...pendaftar,
      dataBaru
    ]);

    setForm({
      nama:"",
      email:"",
      nohp:""
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
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <input
          name="nohp"
          placeholder="Nomor HP"
          value={form.nohp}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button
          className="btn btn-success"
          type="submit"
        >
          Daftar
        </button>

      </form>

      <hr/>


      {pendaftar.map((item,index)=>(

        <div
          key={index}
          className="card p-3 mb-2"
        >

          <strong>{item.nama}</strong>

          <div>{item.email}</div>

          <div>{item.nohp}</div>

          <small>{item.pelatihan}</small>

        </div>

      ))}

    </div>
  );
}

export default FormPendaftaran;