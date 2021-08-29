import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import { ServicesWrapper } from './styles';
import logo from 'assets/logo.png';
import svg from './teste.svg';
import Button from 'components/Button/Button';
import { CarouselWrapper } from 'components/CarouselComponent/styles';
import CarouselComponent from 'components/CarouselComponent';

const Services = () => {
  const router = useRouter();

  return (
    <ServicesWrapper>
      <div className="container grid">
        <div className="leftSide">
          <h3>Nosso Serviços</h3>
          <h5 className="subtitle">Visita Técnica</h5>
          <p>
            Serviço presencial cujo objetivo é verificar situação ou condições
            técnicas necessárias para elaboração de projetos, execução de obras,
            encaminhamento de estudos complementares para patologias de obras.
          </p>
          <Button>Quero Conhecer</Button>
          <img src={svg} />
          <button>Esquerda</button> <button>Direita</button>
        </div>
        <div className="carousel">
          <CarouselComponent />
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
