import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HeaderWrapper } from './styles'
// import logo from 'assets/logo.png';
import useMediaQuery from 'hooks/useMediaQuery'
import Button from 'components/Button/'
import MobileLogo from '../../assets/svg/logomobile.svg'
import { motion } from 'framer-motion'
import RightArrow from '../../../public/right.svg'

import Image from 'next/image'

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState<boolean>(false)
  const mobile = useMediaQuery('(max-width: 991px)')
  const { pathname, push } = useRouter()
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setMobileHeader(false)
  }, [pathname])

  function handleClick() {
    setMobileHeader(false)
  }

  const wrapper = {
    open: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: 'top',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    closed: { opacity: 0, scaleY: 0 }
  }

  const nav = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3
      }
    },
    hidden: { opacity: 0 }
  }

  const items = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 }
  }

  return (
    <HeaderWrapper className="container" id="inicio">
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
                <li>
                  <a href="#inicio">Home</a>
                </li>
                <li>
                  <a href="#sobre">Quem somos</a>
                </li>
                <li>
                  <a href="#servicos">Nossos serviços</a>
                </li>
                <li>
                  <a href="#clientes">Clientes</a>
                </li>
                <li>
                  <a href="#trabalhe">Trabalhe Conosco</a>
                </li>
              </ul>
            </nav>
            <Button>PEÇA UM ORÇAMENTO</Button>
          </>
        )}

        {mobile && (
          <div
            className="mobilelogo"
            onClick={() => setMobileHeader((active) => !active)}
          >
            <MobileLogo />
          </div>
        )}

        {mobileHeader && (
          <motion.div
            className="sideBar"
            initial="closed"
            animate="open"
            variants={wrapper}
          >
            <div className="top">
              <Link href="/">
                {/* <a> */}
                <Image
                  src="/logo.png"
                  alt="Foto exemplo"
                  width="110px"
                  height="92px"
                  className="imagi"
                />

                {/* </a> */}
              </Link>
              <div
                className="icon-menu"
                onClick={() => setMobileHeader((active) => !active)}
              >
                {/* <MenuOpen /> */}x
              </div>
            </div>
            <motion.div
              className="navigation"
              initial="hidden"
              animate="visible"
              variants={nav}
            >
              <Link href="#inicio">
                <motion.a
                  variants={items}
                  // style={{ fontWeight: pathname === '/sobre' && 700 }}
                  onClick={handleClick}
                  className="gradient-box"
                >
                  Inicio <RightArrow />
                </motion.a>
              </Link>
              <Link href="#sobre">
                <motion.a
                  variants={items}
                  // style={{ fontWeight: pathname === '/parceiros' && 700 }}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Quem somos <RightArrow />
                </motion.a>
              </Link>
              <Link href="#servicos">
                <motion.a
                  variants={items}
                  // style={{ fontWeight: pathname === '/parceiros' && 700 }}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Nossos serviços <RightArrow />
                </motion.a>
              </Link>
              <Link href="#clientes">
                <motion.a
                  variants={items}
                  // style={{ fontWeight: pathname === '/parceiros' && 700 }}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Clientes <RightArrow />
                </motion.a>
              </Link>
              <Link href="#trabalhe">
                <motion.a
                  variants={items}
                  // style={{ fontWeight: pathname === '/parceiros' && 700 }}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Trabalhe conosco <RightArrow />
                </motion.a>
              </Link>
            </motion.div>
            <div className="sider-bar-footer">{/* <Logo /> */}</div>
          </motion.div>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
