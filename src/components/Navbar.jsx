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

  const closeMenu = ()=>{
    setMenuOpen(false);
  };

  useEffect(() =>{
    const handleKeyDown = (e) =>{
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
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
          className= {`navbar-toggler ${menuOpen ? "active" :""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


          {menuOpen && ( 
            <div className="navbar-overlay" onClick={closeMenu}> </div>
          )}

            <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
              <div className="navbar-nav">
                <a  
                className="nav-link"
                href="/"
                onClick={handleHomeClick}>Home</a>

                <a 
                className="nav-link"
                 href="/#program"
                 onClick={handleProgramClick}> Program Pelatihan</a>

                 <Link
                 className="nav-link"
                 to="/about-us"
                 onClick={closeMenu}>
                  About Us
                 </Link>

              </div>

            </div>

      </div>
    </nav>
  );
}

export default Navbar;