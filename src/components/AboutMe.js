import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author.." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I love to interact with new people. It doesn't matter if you are a
            coach or a competitor. I always see that as a way of growth by
            interacting with great individuals. Overthinking is the greatest
            enemy whom I never see. When I face problems in life, I always find
            an excellent or weird way to solve it. But never run away from it.
            That's one way I practice growth. I believe through design and
            technology; we can ease consumer society. I have been in love with
            programming since 2008 when I wrote my first program using "Who
            wants to be a millionaire" using Java. I am a Full Stack Web
            Developer, Technical Consultant, C# Developer. Learning has always
            been Constant and never-ending, currently learning Python and AWS
            web services. I have a bachelor's degree in Computer Science
            Engineering, a Master's degree in Information Systems with
            computing, and three years of work experience in IT. I'm pragmatic,
            straight to the point, and all about building reliable, robust,
            fit-to-the-problem solutions using the best-suited technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
