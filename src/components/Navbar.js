import React,{useContext} from "react";
import { HiMenuAlt1 } from 'react-icons/hi'
import { BiLogIn } from 'react-icons/bi'
import { SiGnuprivacyguard } from 'react-icons/si'
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'
import { userContext } from "../context/AuthContext";
import { HiMenuAlt3 } from 'react-icons/hi'


const Navbar = () => {
  const { user } = useContext(userContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to='/' className="navbar-brand d-flex align-items-center">
            <HiMenuAlt1 className="brandIcon" /><span className="brand">maids</span>
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
            <HiMenuAlt3 className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
            {
                user && 
                <li className="nav-item">
                  <h4 className="welcome">welcome <span className="username">{user.username}</span></h4>
              </li>
              }
            </ul>
            <ul className="navbar-nav ms-auto">              
              <li className="nav-item">
                <Link to='/about' className="nav-link active" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to='/account'
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to='/login' className="dropdown-item">
                      <BiLogIn className="icon" />Login
                    </Link>
                  </li>
                  <li>
                    <Link to='/register' className="dropdown-item">
                      <SiGnuprivacyguard className="icon" />Register
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;