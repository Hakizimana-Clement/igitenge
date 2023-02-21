import React from "react";
export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-background">
        <div className="container-fluid navigation-Spacing">
          <a className="navbar-brand " href="some/valid/uri#">
            Igitenge Style
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="uri#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="uri#Gategories"
                >
                  Gategories
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="/some/valid/uri#"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="/some/valid/uri#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="/some/valid/uri#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <button className="  btn btn-danger btn-sale  ">
              <a
                href="/some/valid/uri#"
                className=" text-light text-decoration-none"
              >
                Sale
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
