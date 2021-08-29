import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';

import { CarouselWrapper } from './styles';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import logo from 'assets/logo.png';
import Button from 'components/Button/Button';


const CarouselComponent = () => {
  const router = useRouter();
  const [selectedImg,setSelectedImg] = useState()

  const allImages = [
    {url:'https://unsplash.com/photos/JvQ0Q5IkeMM'},
    {url:'https://unsplash.com/photos/j0Da0mEplnY'},
    {url:'https://unsplash.com/photos/EvczjigoKzk'}
  ]
  return (
    <CarouselWrapper className="container">
      
    
        <img src="https://unsplash.com/photos/JvQ0Q5IkeMM" alt="" />
        <img src="https://unsplash.com/photos/j0Da0mEplnY" alt="" />
        <img src="https://unsplash.com/photos/EvczjigoKzk" alt="" />
    
    </CarouselWrapper>
  );
};

export default CarouselComponent;
