import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import {
  HeaderButton,
  HeaderLogo,
  HeaderProfile,
  CostumersWrapper,
  RightContainer,
} from './styles';
import logo from 'assets/logo.png';
import Button from 'components/Button/Button';
import { Subtitle, Title } from 'components/commonStyles';
import pirao from 'assets/costumers/pirao.png';
import vogue from 'assets/costumers/vogue.png';
import versatile from 'assets/costumers/versatile.png';
import london from 'assets/costumers/london.png';
import ebateca from 'assets/costumers/ebateca.png';
import dom from 'assets/costumers/dom.png';
import boteco from 'assets/costumers/boteco.png';
import belavista from 'assets/costumers/belavista.png';
import bahia from 'assets/costumers/bahia.png';
import anascimento from 'assets/costumers/anascimento.png';
import alphaville from 'assets/costumers/alphaville.png';
import aloha from 'assets/costumers/aloha.png';

const Costumer = () => {
  const router = useRouter();

  return (
    <CostumersWrapper className="container">
      <div className="upSide">
        <Title>Alguns dos nossos clientes</Title>
        <Subtitle>
          Grandes marcas, pequenos negócios, novas startups e indivíduos
        </Subtitle>
        <Subtitle>Estamos prontos para te atender!</Subtitle>
      </div>
      <div className="downSide">
        <div className="logo">
          <img src={ebateca} alt="" />
        </div>
        <div className="logo">
          <img src={vogue} alt="" />
        </div>
        <div className="logo">
          <img src={versatile} alt="" />
        </div>
        <div className="logo">
          <img src={dom} alt="" />
        </div>
        <div className="logo">
          <img src={london} alt="" />
        </div>
        <div className="logo">
          <img src={boteco} alt="" />
        </div>
        <div className="logo">
          <img src={belavista} alt="" />
        </div>
        <div className="logo">
          <img src={bahia} alt="" />
        </div>
        <div className="logo">
          <img src={anascimento} alt="" />
        </div>
        <div className="logo">
          <img src={alphaville} alt="" />
        </div>
        <div className="logo">
          <img src={aloha} alt="" />
        </div>
        <div className="logo">
          <img src={pirao} alt="" />
        </div>
      </div>
    </CostumersWrapper>
  );
};

export default Costumer;
