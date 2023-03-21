import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>October 2015- January 2017</h3>
            <h4>convergys India Services pvt ltd</h4>
            <p className="lead">Techical Support Associate</p>
            <p>
            Coordinate with the Developers and the clients to improve the supportability and Diagnose the potential bottlenecks and provide Web application Support.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>January 2017- August 2018</h3>
            <h4>Regalix India pvt ltd</h4>
            <p className="lead">Front-End Developer</p>
            <p>
Developed Front End components mainly using JavaScript framework React.js, JSX in coordination with senior
React developers.<br/>

            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>March 2021- June 2021</h3>   
            <h4>Digital Salon Group - Ireland</h4>
            <p className="lead">Junior Web Developer</p>
              <p>
              Designing using fully responsive WordPress eCommerce website with client requirements. 
              Managed Google Tag Manager for various clients eCommerce setup.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>October 2020 - November 2021</h3>
            <h4>MVP Studio - Ireland</h4>
            <p className="lead">Software Developer</p>
                     <p>
              Developing Web Applications using MVC ASP.NET Core with SQL Server and Front-End Reactjs. 
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>November 2021 - Present</h3>   
            <h4>GameStop</h4>
            <p className="lead">Junior Software Developer</p>
              <p>
             Worked in Agile environment to develop features for Ireland, Canada, DACh and Italy.
             Developing features using MVC ASP.NET framework, Angular 11 for Cart and Checkout and SQL server for database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
