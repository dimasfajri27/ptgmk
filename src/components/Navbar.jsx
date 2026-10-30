import "bootstrap/dist/css/bootstrap.min.css" //panggil bootstrap versi css nya yang ada di node_modules
import "bootstrap/dist/js/bootstrap.min.js" // pangill bootstrap versi js yang ada di node_modules
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid"> 
        <a className="nav-link active" aria-current="page" href="#">
          <img src={logo} 
          alt="logo geo mandiri kreasi"
          width= "40"
          height="40"
          className="me-2" />PT. Geo Mandiri Kreasi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Program Latihan</a>
            <a className="nav-link" href="#">About</a>
          </div>
           <form className="d-flex ms-3" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>

       

      </div>
    </nav>
    </>
  )
}

export default Navbar;