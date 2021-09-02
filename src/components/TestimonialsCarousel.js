import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//ADDING AVATARS    https://randomuser.me/api/portraits/women/2.jpg
import Kunal from '../avatar/kunal.jfif';
import Suma from '../avatar/Suma.jfif';
// import avatar2 from '../avatar/avatar2.jpg';
// import avatar3 from '../avatar/avatar3.jpg';
// import avatar4 from '../avatar/avatar4.jpg';
// import avatar5 from '../avatar/avatar5.jpg';

// import avatar1 from "https://randomuser.me/api/portraits/men/2.jpg";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Sheetal Schofield" className="pt-2" />
        <div className="myCarousal">
          <h4>Sheetal Schofield</h4>
          <p className="lead">
          Amir is a professional, hard-working individual, who's always willing to rise up to any challenge.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="Sam Hobbs" className="pt-2"/>
        <div className="myCarousal">
          <h4>Sam Hobbs</h4>
          <p className="lead">
          Emad is a very capable front end developer who takes pride in his work, always willing to help and put in that little bit of extra effort to help others.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Rochelle" className="pt-2" />
        <div className="myCarousal">
          <h4>Rochelle Megan - Web Developer</h4>
          <p className="lead">
          Emad was very flexible and worked hard to ensure that the final result was as per our very specific vision.  Even better, his advice helped me enough to solve the problems, very straight up guy! Thank you Emad.
          </p>
        </div>
      </>
      <>
        <img src={Kunal} alt="Kunal" className="pt-2" />
        <div className="myCarousal">
          <h4>kunal Kisku - <small>Business Development Manager, Industry Connect Ireland</small> </h4>
          
          <p className="lead">
          Without doubt one of the most talented programmers out there.I always go back to Emad Amir when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.You won't be disappointed.
          </p>
        </div>
      </>
      <>
        <img src={Suma} alt="Suma" className="pt-2" />
        <div className="myCarousal">
          <h4>Suma Narayanappa - <small>Social Media Strategist</small> </h4>
          
          <p className="lead">
          I worked with Emad to build my website. He was extremely insightful with techniques to optimize the website. He was professional and completed the project on time. He was also available for extra support after the work was completed.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="Renn Haus" className="pt-2" />
        <div className="myCarousal">
          <h4>Renn Haus</h4>
          <p className="lead">
          Emad is very easy to work with. I was amazed at how efficiently he works. My project was done well ahead of schedule and I'm happy with the final result.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
