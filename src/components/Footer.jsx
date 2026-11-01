import "./Footer.css";
function Footer() {
    return(
        <footer className= "footer-custom">
            <div className="footer-left">
                <div className="row align-itmes-center">
                    <div className="col-md-6">
                        <h5 className="fw-bold">PT. Geo Mandiri Kreasi</h5>
                        <p className="text-white-50 mb-md-0">
                            Consultant, Training & Inspection

                        </p>
                    </div>

                    <div className="col-md-6 mb-4">
                        <h5>Lokasi Kami</h5>
                    </div>
                        
                   
                    <div className="Footer-right">
                        <div className="footer-links">
                        <a href="#" className="text-white me-3">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-white">
                        <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <hr className="border-secondary my-4" />
                <p className="text-center text-white-50 mb-0">
                    &copy;2026 PT. Geo Mandiri Kreasi. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer;