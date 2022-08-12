import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import fire from '../../fire';

const Navbar = (props) => {

    const {
        user,
        handleLogout,
    } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand ml-5" to="/">
                <img src={logo} alt="logo" style={{ width:'35px'}}/>
            </Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars" style={{ color: '#fff' }}></i>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {user ? (
                    <>
                        <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">
                                Home&nbsp;<i class="fas fa-home"></i>
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/Parking-Location">
                                parking location
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="Contacts">
                                contact us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="Admin">
                                Parking Details
                            </Link>
                        </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                            Search
                        </button>
                        </form> */}
                        <Link className="nav-link text-white text-uppercase ml-5" to="Login">
                            <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleLogout}>
                                Logout
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/">
                                Home&nbsp;<i class="fas fa-home"></i>
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="/Parking-Location">
                                parking location
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white text-uppercase ml-5" to="Contacts">
                                contact us
                            </Link>
                        </li>
                        </ul>
                        <Link className="nav-link text-white text-uppercase ml-5" to="Login">
                            <button className="btn btn-outline-primary my-2 my-sm-0">
                                Admin login
                            </button>
                        </Link>
                    </>
                )}
            </div>
            </nav>
    );
}

export default Navbar;