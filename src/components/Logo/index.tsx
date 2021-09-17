import React from 'react'
import { LogoWrapper } from './styles'
import AthanLogo from '../../assets/svg/logo-athan.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/" passHref>
        <AthanLogo />
      </Link>
    </LogoWrapper>
  )
}

export default Logo
