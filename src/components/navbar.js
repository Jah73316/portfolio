 import logo from '../images/DS.svg';
 function  Navbar(){
    return <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light" aria-label="Ninth navbar example">
    <div className="container-xl">
      <a className="navbar-brand" href="#">
        <img className='logo-image' src={logo} height='50' width='50' alt='brand-logo' />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07XL">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Catgory</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Women's Clothing</a></li>
              <li><a className="dropdown-item" href="#">Men's Clothing</a></li>
              <li><a className="dropdown-item" href="#">Kid's Clothing</a></li>
              <li><a className="dropdown-item" href="#">Makeup</a></li>
              <li><a className="dropdown-item" href="#">Fragrance</a></li>
              <li><a className="dropdown-item" href="#">Bed and Bath</a></li>
              <li><a className="dropdown-item" href="#">Furniture</a></li>
            </ul>
          </li>
        <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <form className="d-flex flex-row" role="search">
          <input className="form-control border-2" type="search" placeholder="Search for a product..." aria-label="Search" />
          <button className="btn btn-primary text-white ms-2">Search</button>
        </form>
      </div>
    </div>
  </nav>
 }
 export default Navbar;