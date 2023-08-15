import React from "react";
import { Carousel } from "react-bootstrap";
import isa from '../img/isa.jpeg';
import devops from '../img/devops.jpeg';
import about from '../img/about.jpeg';

const Slider = () => {
  return (
    <Carousel keyboard touch fade autoplay={true} interval={4000} variant="dark" className="shadow">
      <Carousel.Item>
        <img className="d-block w-100" src={devops} alt="First slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={isa} alt="Second slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={about} alt="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
