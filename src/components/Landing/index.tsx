import Button from 'components/Button/'
import { Subtitle } from 'components/commonStyles'
import React, { useRef, useState } from 'react'
import { LandingWrapper } from './styles'
import Image from 'next/image'
import Foto from '../../../public/land.webp'
import Link from 'next/link'
import { motion } from 'framer-motion'

const wrapper = {
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
  hidden: { opacity: 0, x: -100 }
}

const Landing = () => {
  const hoverAnimationOne = { borderColor: '#0000ff', y: -5 }
  const hoverAnimationTwo = { borderColor: '#0000ff', y: -5 }
  const hoverAnimationThree = { borderColor: '#0000ff', y: -5 }
  const cardsSectionRef = useRef<HTMLDivElement>(null)

  const [isCardsSectionCardsVisible, setIsCardsSectionVisible] =
    useState<boolean>(true)

  return (
    <LandingWrapper className="container">
      <div className="row cont">
        <motion.div
          initial="right"
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
          variants={{
            right: {
              x: -100,
              opacity: 0
            }
          }}
        >
          <div className="leftSide">
            <h1>Trazemos sempre a melhor solução para seu projeto</h1>
            <p>
              Alinhados na melhor técnica e no menor custo possível para sua
              família ou seu negócio!
            </p>
            <Link href="/formulario">
              <Button>Peça um orçamento</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="right"
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
          variants={{
            right: {
              x: 100,
              opacity: 0
            }
          }}
        >
          <div className="d-none d-lg-block image">
            <img src={Foto} alt="" />
            {/* <Image
            src="/land.jpg"
            alt="Foto exemplo"
            width="696px"
            height="545px"
            className="imagi"
          /> */}
          </div>
        </motion.div>
      </div>
    </LandingWrapper>
  )
}

export default Landing
