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
    slidesToShow: 2,
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
      mt="30px"
        width={{ base: '80%', md: '100%', lg: '100%' }}
        maxWidth="800px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
      >
        <Slider {...settings}>
          <div>
            <Image  w="100%" src="https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" />
          </div>
          <div>
            <Image  w="100%" src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
          </div>
          <div>
            <Image w="100%" src="https://images.pexels.com/photos/1313809/pexels-photo-1313809.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" />
          </div>
        </Slider>
      </Box>
    </Flex>
  );
};


