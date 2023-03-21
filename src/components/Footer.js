import React from 'react';
import {FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditIcon,
  RedditShareButton,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
return (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="d-flex">
            <p>1 Ashley Avenue, Swords, Dublin, Ireland</p>
          </div>
          <div className="d-flex">
            <a href="tel:0899869806">+353-899869806</a>
          </div>
          <div className="d-flex">
            <p>emad.amir2017@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-2 col-sm-6">
          <div className="row">
            <div className="col">
              <div className="footer-nav">
              <Link smooth={false} to="home"  className="nav-link" href="/#">
              Home
            </Link>  
              </div>
              <br />
              <div className="footer-nav">
              <Link smooth={false} to="about" offset={-110} className="nav-link" href="/#">
              about me
            </Link>
              </div>
              <br />
              <div className="footer-nav">
              <Link smooth={false} to="services" offset={-110} className="nav-link" href="/#">
              services
            </Link>
              </div>
            </div>
            <div className="col">
              <div className="footer-nav">
              <Link smooth={false} to="experience" offset={-110} className="nav-link" href="/#">
              Experience
            </Link>
              </div>
              <br />
              <div className="footer-nav">
              <Link smooth={false} to="demo" offset={-110} className="nav-link" href="/#">
              Projects
            </Link>
              </div>
              <br />
              <div className="footer-nav">
              <Link smooth={false} to="contacts" offset={-110} className="nav-link" href="/#">
              Contacts
            </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
            <div className="d-flex justify-content-center">
                <FacebookShareButton
                url={"https://github.com/EmadAmir"}
                quote="Front-End Developer"
                hashtag="#javascript, #reactjs"
                >
                    <FacebookIcon className="mx-3" size={36}/>
                </FacebookShareButton>
                <TwitterShareButton
                url={"https://github.com/EmadAmir"}
                quote="Front-End Developer"
                hashtag="#javascript, #reactjs"
                >
                    <TwitterIcon className="mx-3" size={36}/>
                </TwitterShareButton>
                <RedditShareButton
                url={"https://github.com/EmadAmir"}
                quote="Front-End Developer"
                hashtag="#javascript, #reactjs"
                >
                    <RedditIcon className="mx-3" size={36}/>
                </RedditShareButton>
                <LinkedinShareButton
                url={"https://github.com/EmadAmir"}
                quote="Front-End Developer"
                hashtag="#javascript, #reactjs"
                >
                    <LinkedinIcon className="mx-3" size={36}/>
                </LinkedinShareButton>

            </div>
            <p className="pt-3 text-center">
                Copyrights&copy;
                {new Date().getFullYear()}&nbsp;Emad Amir | All Rights Reserved
            </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Footer;
