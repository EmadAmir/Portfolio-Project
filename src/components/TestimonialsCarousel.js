import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//ADDING AVATARS    https://randomuser.me/api/portraits/women/2.jpg
// import avatar1 from '../avatar/avatar1.jpg';
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
          <h3>Sheetal Schofield</h3>
          <p className="lead">
          Amir is a professional, hard-working individual, who's always willing to rise up to any challenge.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/men/26.jpg" alt="Sam Hobbs" className="pt-2"/>
        <div className="myCarousal">
          <h3>Sam Hobbs</h3>
          <p className="lead">
          Emad is a very capable front end developer who takes pride in his work, always willing to help and put in that little bit of extra effort to help others.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="John Doe3" className="pt-2" />
        <div className="myCarousal">
          <h3>John Doe3</h3>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="John Doe4" className="pt-2" />
        <div className="myCarousal">
          <h3>John Doe4</h3>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="John Doe5" className="pt-2" />
        <div className="myCarousal">
          <h3>John Doe5</h3>
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
