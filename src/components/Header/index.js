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
import logo from 'assets/logo.png';
import Button from 'components/Button/Button';

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper className="container">
      <div className="header">
        <h5>
          <img src={logo} />
        </h5>
        <nav>
          <ul>
            <li>Home</li>
            <li>Quem somos</li>
            <li>Nossos serviços</li>
            <li>Clientes</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </nav>
        <Button>PEÇA UM ORÇAMENTO</Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
