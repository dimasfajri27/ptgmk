
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menutup menu navigasi
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Menutup menu ketika tombol Escape ditekan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  // Tombol Home
  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  // Menu Program Pelatihan
  const handleProgramClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById("program")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/#program");
    }
  };

  // Menu About Us
  const handleAboutClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/#about");
    }
  };

  // Auto-scroll berdasarkan hash URL
  useEffect(() => {
    if (location.pathname !== "/") return;

    if (location.hash === "#program" || location.hash === "#about") {
      const targetId = location.hash.substring(1);

      const timer = setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);

      return () => clearTimeout(timer);
    }

    // Tidak melakukan smooth scroll ke atas ketika berpindah route.
    // Pengaturan posisi scroll halaman ditangani oleh ScrollManager di App.jsx.
  }, [location.pathname, location.hash]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-custom ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">

        {/* Logo dan nama perusahaan */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="logo geo mandiri kreasi"
            width="40"
            height="40"
            className="me-2"
          />
          PT. Geo Mandiri Kreasi
        </Link>

        {/* Tombol menu mobile */}
        <button
          className={`navbar-toggler ${menuOpen ? "active" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Overlay menu mobile */}
        {menuOpen && (
          <div
            className="navbar-overlay"
            onClick={closeMenu}
          ></div>
        )}

        {/* Menu navigasi */}
        <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
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
              Program Pelatihan
            </a>

            <a
              className="nav-link"
              href="/#about"
              onClick={handleAboutClick}
            >
              About Us
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
