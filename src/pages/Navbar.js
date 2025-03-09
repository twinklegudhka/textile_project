import React from "react";
import { Link , useLocation} from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            LogoText
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${
                    location.pathname === "/Products" ? "active" : ""
                  }`} to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${
                    location.pathname === "/Cart" ? "active" : ""
                  }`} to="/Cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${
                    location.pathname === "/Seller" ? "active" : ""
                  }`}
                  to="/Seller"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seller
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item ${
                    location.pathname === "/Action" ? "active" : ""
                  }`} to="/Action">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${
                    location.pathname === "/A2" ? "active" : ""
                  }`} to="/A2">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${
                    location.pathname === "/A3" ? "active" : ""
                  }`} to="/A3">
                      Something else here
                    </Link>
                  </li>
                </ul>
            
              </li>
              </ul>
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="auth-modal-toggle btn btn-primary ripple-surface ms-2 me-1" data-auth-modal-tab="sign-in" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
