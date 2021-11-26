import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HeaderWrapper } from './styles'
import useMediaQuery from 'hooks/useMediaQuery'
import Button from 'components/Button/'
import MobileLogo from '../../assets/svg/logomobile.svg'
import { motion } from 'framer-motion'
import RightArrow from '../../../public/right.svg'
import MenuClose from '../../../public/close.svg'

import Image from 'next/image'

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState<boolean>(false)
  const mobile = useMediaQuery('(max-width: 991px)')
  const { pathname } = useRouter()
  // const linkRef = useRef<HTMLAnchorElement>(null)

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
            src="/logo-topo.png"
            alt="Logo FC Arquitetura e Engenharia"
            width="110px"
            height="92px"
            className="imagi"
            placeholder="blur"
            blurDataURL="/logo-topo.png"
          />
        </h5>

        {!mobile && (
          <>
            <nav>
              <ul>
                <li>
                  <Link href="/#inicio">Início</Link>
                </li>
                <li>
                  <Link href="/#sobre">Quem somos</Link>
                </li>
                <li>
                  <Link href="/#servicos">Nossos serviços</Link>
                </li>
                {/* <li>
                  <Link href="/#clientes">Clientes</Link>
                </li> */}
                <li>
                  <Link href="#trabalhe">Trabalhe Conosco</Link>
                </li>
              </ul>
            </nav>
            <Link href="/orcamento" passHref>
              <Button>PEÇA UM ORÇAMENTO</Button>
            </Link>
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
              <div
                className="icon-menu"
                onClick={() => setMobileHeader((active) => !active)}
              >
                <MenuClose />
              </div>
            </div>
            <motion.div
              className="navigation"
              initial="hidden"
              animate="visible"
              variants={nav}
            >
              <Link href="/#inicio" passHref>
                <motion.a
                  variants={items}
                  onClick={handleClick}
                  className="gradient-box"
                >
                  Inicio <RightArrow />
                </motion.a>
              </Link>
              <Link href="/#sobre" passHref>
                <motion.a
                  variants={items}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Quem somos <RightArrow />
                </motion.a>
              </Link>
              <Link href="/#servicos" passHref>
                <motion.a
                  variants={items}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Nossos serviços <RightArrow />
                </motion.a>
              </Link>

              <Link href="#trabalhe" passHref>
                <motion.a
                  variants={items}
                  className="gradient-box"
                  onClick={handleClick}
                >
                  Trabalhe conosco <RightArrow />
                </motion.a>
              </Link>
            </motion.div>
            <div className="sider-bar-footer">
              <p>© 2021 FC Arquitetura e Engenharia</p>
            </div>
          </motion.div>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
