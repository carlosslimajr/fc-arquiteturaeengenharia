import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import {
  HeaderButton,
  HeaderLogo,
  HeaderProfile,
  HeaderWrapper,
  RightContainer,
} from './styles';
import logo from 'assets/logo.png'
import Button from 'components/Button/Button';

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper className="container">
     
      <div className="header">
         <h5><img src={logo}/></h5>
        <nav>
          <ul>
            <li>Quem Somos</li>
            <li>Serviços</li>
            <li>Clientes</li>
            <li>Fale Conosco</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </nav>
        <Button>Peça um orçamento</Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
