import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";
import ourClient from "../assets/OurClient/our-client.png";

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
                    
                {/*Bagian Kontainer Gambar Semua Logo Client */}
                <div className="footer-clients-section my-3">
                    <p className="text-white-100 small mb-2" style={{ letterSpacing: '1px', fontWeight: '600' }}>OUR CLIENTS</p>
                    <div className="clients-image-wrapper">
                        <img 
                            src={ourClient} 
                            alt="Our Clients" 
                            className="img-fluid rounded p-2"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
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
                        <a href="/#program">Program Pelatihan</a>
                        <a href="#about">About Us</a>
                     
                    </div>
                </div>
                <div className="footer-location" id="lokasi">
                    <h5>
                       <i className="bi bi-geo-alt-fill"></i>
                       Lokasi Kami
                    </h5>

                    <div className="footer-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1237044775303!2d106.9067668!3d-6.2474253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi.%20PT!5e0!3m2!1sid!2sid!4v1793774160097!5m2!1sid!2sid" 
                         width="100%"
                         height="450"
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