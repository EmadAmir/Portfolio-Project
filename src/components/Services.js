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
    <div className="services">
      <h1 className="py-5">my Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h4> Web Design</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGlobe} size="2x" />
              </div>
              <h4>Web Development</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              </div>
              <h4>Front-End Developer</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h4> dotNet Developer</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                randomised words which don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
