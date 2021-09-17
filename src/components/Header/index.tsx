import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HeaderWrapper } from './styles'
// import logo from 'assets/logo.png';
import useMediaQuery from 'hooks/useMediaQuery'
import Button from 'components/Button/'
import MobileLogo from '../../assets/svg/logomobile.svg'

import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const mobile = useMediaQuery('(max-width: 991px)')

  return (
    <HeaderWrapper className="container">
      <div className={`header ${mobile && 'mobile'}`}>
        <h5>
          <Image
            src="/logo.png"
            alt="Foto exemplo"
            width="110px"
            height="92px"
            className="imagi"
          />
        </h5>
        {!mobile && (
          <>
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
          </>
        )}

        {mobile && (
          <div className="mobilelogo">
            <MobileLogo />
          </div>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
