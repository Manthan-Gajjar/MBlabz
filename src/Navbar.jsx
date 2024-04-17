import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Project1.css'; 

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Navbar Brand */}
                <NavLink className="navbar-brand" to="/">Megabite Labz</NavLink>

                {/* Navbar Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Navbar Links (aligned to the right) */}
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/service" activeClassName="active">Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                        {/* Add more navigation items as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
