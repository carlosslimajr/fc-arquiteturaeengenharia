import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';

import { SwapperWrapper } from './styles';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import logo from 'assets/logo.png';
import Swiper from 'swiper'
import Button from 'components/Button/Button';

const SwapperComponent = () => {
  const router = useRouter();

  return (
    <SwapperWrapper className="container">
      <Carousel>
        <img src="https://unsplash.com/photos/JvQ0Q5IkeMM" alt="" />
        <img src="https://unsplash.com/photos/j0Da0mEplnY" alt="" />
        <img src="https://unsplash.com/photos/EvczjigoKzk" alt="" />
      </Carousel>
    </SwapperWrapper>
  );
};

export default SwapperComponent;
