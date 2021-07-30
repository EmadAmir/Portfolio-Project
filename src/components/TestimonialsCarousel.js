import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//ADDING AVATARS
import avatar1 from '../avatar/avatar1.jpg';
import avatar2 from '../avatar/avatar2.jpg';
import avatar3 from '../avatar/avatar3.jpg';
import avatar4 from '../avatar/avatar4.jpg';
import avatar5 from '../avatar/avatar5.jpg';

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
        <img src={avatar1} alt="John Doe1" />
        <div className="myCarousal">
          <h3>John Doe1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="John Doe2" />
        <div className="myCarousal">
          <h3>John Doe2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe3" />
        <div className="myCarousal">
          <h3>John Doe3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe4" />
        <div className="myCarousal">
          <h3>John Doe4</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In eius
            error quaerat sunt placeat illo aliquam quas molestias laboriosam
            quia, est ut nesciunt nulla officiis animi quos doloribus quis
            adipisci.
          </p>
        </div>
      </>
      <>
        <img src={avatar5} alt="John Doe5" />
        <div className="myCarousal">
          <h3>John Doe5</h3>
          <p>
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
