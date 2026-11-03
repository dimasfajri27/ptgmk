import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
    return(
        <footer className="footer-custom">

            {/* bagian hijau */}
            <div className="footer-left">
                <div className="footer-brand">
                    <Link className="footer-brand-linSk text-decoration-none text-black" to="/">
                    <img
                        src={logo}
                        alt="logo geo mandiri kreasi"
                        width="40"
                        height="40"
                        className="me-2"
                    />
                   <h3>PT. Geo Mandiri Kreasi</h3> 
                    </Link>
                    <p className="text-white-50">
                        Consultant, Training & Inspection
                    </p>
                </div>

                <div className="footer-copyright">
                    <hr className="border-secondary" />
                    <p className="text-center text-white-50 mb-0">
                        &copy;2026 PT. Geo Mandiri Kreasi.
                        All Rights Reserved
                    </p>
                </div>
            </div>

            {/* bagian abu abu */}
            <div className="footer-right">
                <div className="footer-top">
                    <div className="footer-contact">
                        <h5>Contact Us</h5>

                        <a href="tel:+6281288465158">
                            <i className="bi bi-telephone"></i>
                            <span>Phone</span>
                        </a>

                        <a href="mailto:officegmk26@gmail.com">
                            <i className="bi bi-envelope-at"></i>
                            <span>Email</span>
                        </a>

                        <a href="https://www.instagram.com/geomandirigroup/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                            <span>Instagram</span>
                        </a>


                        
                        <a href="https://www.linkedin.com/in/pt-geo-mandiri-kreasi-59a780116"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div className="footer-quicklinks">
                        <h5>Quick Link</h5>
                        <a href="#home">Home</a>
                        <a href="##program">Program Pelatihan</a>
                        <a href="#about">About Us</a>
                     
                    </div>
                </div>
                <div className="footer-location" id="lokasi">
                    <h5>
                       <i className="bi bi-geo-alt-fill"></i>
                       Lokasi Kami
                    </h5>

                    <div className="footer-map">
                        <iframe src="https://maps.google.com/maps?q=--6.247238660370986,106.9067775286933&output=embed"
                         width="100%"
                         height="180"
                         style={{border: 0}}
                         allowFullScreen=""
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Lokasi Pt. Geo Mandiri Kreasi"></iframe>
                    </div>
                </div>

            </div>


        </footer>
    )
}
export default Footer;