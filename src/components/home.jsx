import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import gambar from "./img/images.png"


function Home() {
    return (
        <>
            <div className="container mt-5">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-4">
                        <h1 className="display-5 fw-bold">
                            Selamat Datang di Website Saya
                        </h1>

                        <p>
                            Ini adalah halaman Home yang dibuat menggunakan
                            React dan Bootstrap.
                        </p>

                    </div>
                </div>
                <div className="card" style={{ width: "18rem " }}>
                    <img src={gambar} className="card-img-top gambar-card" alt="gmbarnya" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Home;