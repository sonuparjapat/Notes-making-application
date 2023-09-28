import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CSSTransition } from 'react-transition-group';
import { Box, Center } from '@chakra-ui/react'; // Import Box from Chakra UI
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

// Import your images
import image1 from "./Images/1.jpg";
import image2 from "./Images/2.jpg";
import image3 from "./Images/3.jpg";
import image4 from "./Images/4.jpg";
import image5 from "./Images/5.jpg";
import image6 from "./Images/6.jpg";

export default function Homepage() {
  const images = [image1, image2, image3, image4, image5, image6];
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Check if all images are loaded
    const imagePromises = images.map((imageSrc) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        // All images are loaded
        setImagesLoaded(true);
      });

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  // Render the carousel only if all images are loaded
  // if(!imagesLoaded){
  //   return <Center height="100vh"><h1>Loading...</h1></Center>
  // }
  return (
    <div className="carousel-container">
      
        {/* <Carousel showThumbs={false} showStatus={false} selectedItem={activeIndex}>
          {images.map((image, index) => (
            <CSSTransition
              key={index}
              classNames="carousel-transition"
              timeout={100}
            > */}
              <div>
                <Box w="100%" h="600px" backgroundImage={`url("https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`} backgroundSize="cover" backgroundPosition="center" />
              </div>
            {/* </CSSTransition>
          ))}
        </Carousel> */}
      
      <div className="carousel-button-container">
        <Link to="/login">
          <Button bg="green.300" position={"absolute"} top="40%" left={"40%"} right={"40%"} donw="50%">LOGIN</Button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
