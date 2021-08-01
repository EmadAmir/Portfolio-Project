import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author.." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          A front-end developer || Software developer with professional experience, based in Ireland. As a developer I have keen eye for detail, and determination to deliver the very highest quality. I take great pride in my work. National and international customers have relied on me for design, implementation, and management of their digital products.
I like to write semantic, cross browser compatible re-usable code, maintainable and easy to understand.
The main areas of my expertise are HTML5, CSS3, Sass, Bootstrap 5, JavaScript, ReactJs, eCommerce Websites custom website or by using WordPress WooCommerce. Apart from this I have worked with MVP Studio to build various web applications using ASP.NET Core, Entity Framework with SQL Database.

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
