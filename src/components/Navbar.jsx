import "bootstrap/dist/css/bootstrap.min.css" //panggil bootstrap versi css nya yang ada di node_modules
import "bootstrap/dist/js/bootstrap.min.js" // pangill bootstrap versi js yang ada di node_modules
function Navbar() {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid"> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;