import React, { useContext, useEffect, useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { userContext } from "../context/AuthContext";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
  const { user, userLogout } = useContext(userContext);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#F4F4F7" : "transparent",
        }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <HiMenuAlt1 className="brandIcon" />
            <span className="brand">maids</span>
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
              {user && (
                <li className="nav-item">
                  <h4 className="welcome">
                    welcome <span className="username">{user.username}</span>
                  </h4>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/account"
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
                  {user ? (
                    <>
                      <li>
                        <p
                          onClick={userLogout}
                          className="dropdown-item logout"
                        >
                          <BiLogIn className="icon" />
                          Logout
                        </p>
                      </li>
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          <CgProfile className="icon" />
                          Profile
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login" className="dropdown-item">
                          <BiLogIn className="icon" />
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="dropdown-item">
                          <SiGnuprivacyguard className="icon" />
                          Register
                        </Link>
                      </li>
                    </>
                  )}
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
