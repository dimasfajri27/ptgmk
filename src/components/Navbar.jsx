
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi menuju bagian Program Latihan
  const handleProgramClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Jika sudah di landing page, langsung scroll
      document.getElementById("program")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Jika berada di halaman detail, kembali ke landing page
      navigate("/#program");
    }
  };

  // Scroll setelah kembali ke landing page
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#program") {
      setTimeout(() => {
        document.getElementById("program")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="logo geo mandiri kreasi"
              width="40"
              height="40"
              className="me-2"
            />
            PT. Geo Mandiri Kreasi
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">

              <Link className="nav-link" to="/">
                Home
              </Link>

              <a
                className="nav-link"
                href="/#program"
                onClick={handleProgramClick}
              >
                Program Latihan
              </a>

              <Link className="nav-link" to="/#about">
                About
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
