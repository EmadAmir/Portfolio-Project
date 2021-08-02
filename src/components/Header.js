//rafce + tap
import React from 'react';
import {Link} from "react-scroll";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className = "main-info">
               <h1>Emad Sanaulla Amir</h1>
               <Typed
               className="typed-text"
               strings={["Web Design","Web Developer", "Front-End Developer", "C# Developer"]}
               typeSpeed={30}
               backSpeed={50}
               loop
               />
               <Link smooth={false} to="contacts" offset={-110} className="btn-main-offer" href="/#">
                Contacts
              </Link> 
               {/* <a href="/#" className="btn-main-offer">Contact Me</a> */}
            </div>
            
        </div>

    )
}

export default Header
