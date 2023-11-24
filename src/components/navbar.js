import logo from "../images/DS.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ProductPage from "../pages/product-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";

function Navbar() {
  return (
    <Router>
      <nav
        className="sticky-top navbar navbar-expand-lg navbar-light bg-light"
        aria-label="Ninth navbar example"
      >
        <div className="container-xl">
          <NavLink className="navbar-brand" to="/">
            {" "}
            <img
              className="logo-image"
              src={logo}
              height="50"
              width="50"
              alt="brand-logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-5">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item fs-5 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catgory
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Women's Clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Men's Clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kid's Clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Makeup
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fragrance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bed and Bath
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Furniture
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item fs-5">
              <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item fs-5">
              <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex flex-row" role="search">
              <input
                className="form-control border-2"
                type="search"
                placeholder="Search for a product..."
                aria-label="Search"
              />
              <button className="btn btn-primary text-white ms-2">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route element={<ProductPage />} path="/product" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<HomePage />} path="/" />
      </Routes>
    </Router>
  );
}
export default Navbar;
