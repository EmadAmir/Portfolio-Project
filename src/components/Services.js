import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faFileCode,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h4> Web Design</h4>
              <p>
              Design high quality and very Professional Web Design and fully Responsive Website Design focused on specific business needs, which are of the highest quality using WordPress or custom-built website. 
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGlobe} size="2x" />
              </div>
              <h4>Web Development</h4>
              <p>
              Undertake the full development lifecycle of a web application. Produce high quality software solutions within time and budget. Provide Support for the existing application. 
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              </div>
              <h4>Front-End Developer</h4>
              <p>
              Contributing towards building, maintaining, and deploying our frontend applications, focusing on application logic, state management, UI components and external interfaces for 3rd party integration.
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h4> Software Developer</h4>
              <p>
              Developing, designing, and maintaining software applications and services written in languages such as C# .NET and JavaScript. Along with designing and developing database interfaces and database applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
