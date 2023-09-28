import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Flex, Image } from '@chakra-ui/react';

export default function FavourateCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Flex justifyContent="center">
      <Box
        width={{ base: '100%', md: '80%', lg: '60%' }}
        maxWidth="800px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <Slider {...settings}>
          <div>
            <Image src="image1.jpg" alt="Slide 1" />
          </div>
          <div>
            <Image src="image2.jpg" alt="Slide 2" />
          </div>
          <div>
            <Image src="image3.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </Box>
    </Flex>
  );
};


