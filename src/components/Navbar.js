import React from 'react';
import myLogo from '../myLogo.png';
import {Link} from "react-scroll";
// REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg fixed-top">
      <div className="container">
        <Link smooth={false} to="home" className="navbar-brand" href="/#">
          <img src={myLogo} className="logo" alt="logo.." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={false} to="home"  className="nav-link" href="/#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="about" offset={-110} className="nav-link" href="/#">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="services" offset={-110} className="nav-link" href="/#">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="experience" offset={-110} className="nav-link" href="/#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="demo" offset={-110} className="nav-link" href="/#">
                Demo Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={false} to="contacts" offset={-110} className="nav-link" href="/#">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
