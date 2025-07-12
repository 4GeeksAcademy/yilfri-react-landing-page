import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand fw-semibold" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white-50" href="#">About</a>
                        <a className="nav-link text-white-50" href="#">Services</a>
                        <a className="nav-link text-white-50" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;