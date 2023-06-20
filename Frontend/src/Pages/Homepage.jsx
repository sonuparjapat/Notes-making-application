import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CSSTransition } from 'react-transition-group';
import styles from "./Homepage.module.css"
import { useEffect,useState } from 'react';
import image1 from "./Images/1.jpg"
import image2 from "./Images/2.jpg"
import image3 from "./Images/3.jpg"
import image4 from "./Images/4.jpg"
import image5 from "./Images/5.jpg"
import image6 from "./Images/6.jpg"
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const images=[image1,image2,image3,image4,image5,image6]
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  return (
    <div className="carousel-container">

    <Carousel showThumbs={false}       showStatus={false} selectedItem={activeIndex}>
      {images.map((image, index) => (
        <CSSTransition
          key={index}
          classNames="carousel-transition"
          timeout={500}
        >
          <div >
            <Image w="100%" height={"600px"} src={image} alt={`Slide ${index}`} />
           
          </div>
        </CSSTransition>
      ))}
    
    </Carousel>
    <div className="carousel-button-container">
   <Link to="/login"> <Button bg="green.300" position={"absolute"} top="50%" left={"40%"} right={"40%"} donw="50%">LOGIN</Button></Link>

      </div>
</div>
  )
}
