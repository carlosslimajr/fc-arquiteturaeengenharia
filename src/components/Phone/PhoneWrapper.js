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
import logo from 'assets/logo2.jpeg';
const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper>
        <h5>FC</h5>
      <div className="header">
         
        <button>/</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
