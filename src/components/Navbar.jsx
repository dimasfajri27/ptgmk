
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  // Efek navbar ketika halaman di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // fungsi menuju home
  const handleHomeClick = (e) => {
  e.preventDefault();

  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate("/");
  }
};

  // Fungsi menuju Program Latihan
  const handleProgramClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById("program")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/#program");
    }
  };

  // Scroll ke Program Latihan setelah kembali ke halaman utama
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#program") {
      const timer = setTimeout(() => {
        document.getElementById("program")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? "scrolled" : ""}`}>
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

            <a
              className="nav-link"
              href="/"
              onClick={handleHomeClick}
            >
              Home
            </a>

            <a
              className="nav-link"
              href="/#program"
              onClick={handleProgramClick}
            >
              Program Latihan
            </a>

            <Link className="nav-link" to="/about">
              About
            </Link>

          </div>

          <form
            className="d-flex ms-3"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
