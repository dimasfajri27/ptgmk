function Footer() {
    return(
        <footer className="bg-dark text-white py-4">
            <div className="container">
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
                        
                   
                    <div className="col-md-6 text-md-end mt-3 mt-md-0">
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
                <hr className="border-secondary my-4" />
                <p className="text-center text-white-50 mb-0">
                    &copy;2026 TechCompany. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer;