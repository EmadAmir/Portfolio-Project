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
          {
          <p>
            From an early age I have been intrigued by technology and programming, I spent hours designing and developing websites and expeimenting with them. I am someone who loves to solve problems and make things happen in the digital world. <br/>
As a developer, I take great pride in my work and aim to provide a high-quality  and efficiant code that meets the business requirements.  The technology that I have worked on are ASP.NET MVC, Angular, HTML5, CSS3, Sass, Bootstrap 5, JavaScript, React, eCommerce Websites custom website or by using WordPress WooCommerce.<br/>
Outside of programming, I'm a big fan of hiking, camping, and exploring the great outdoors. I find that spending time in nature is a great way to clear my mind and recharge my creative batteries. I enjoy cooking, I feel its a great way to unwind after a long day of coding. 

          </p>
          /* <p>
          A front-end developer || Software developer with professional experience, based in Ireland. As a proud developer I have keen eye for details, and determination to deliver the very highest quality. I take great pride in my work.
I like to write semantic, cross browser compatible re-usable code, maintainable and easy to understand.
The main areas of my expertise are ASP.NET MVC, Angular, HTML5, CSS3, Sass, Bootstrap 5, JavaScript, React, eCommerce Websites custom website or by using WordPress WooCommerce. Apart from this I currently work in GameStop as a software developer, using ASP.NET Framework, Angular with SQL Server Database.

          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
