import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CostumersWrapper } from './styles'
import logo from 'assets/logo.png'
import { Subtitle, Title } from 'components/commonStyles'
import pirao from 'assets/costumers/pirao.png'
import vogue from 'assets/costumers/vogue.png'
import versatile from 'assets/costumers/versatile.png'
import london from 'assets/costumers/london.png'
import ebateca from 'assets/costumers/ebateca.png'
import dom from 'assets/costumers/dom.png'
import boteco from 'assets/costumers/boteco.png'
import belavista from 'assets/costumers/belavista.png'
import bahia from 'assets/costumers/bahia.png'
import anascimento from 'assets/costumers/anascimento.png'
import alphaville from 'assets/costumers/alphaville.png'
import aloha from 'assets/costumers/aloha.png'
import { motion } from 'framer-motion'

const Costumer: React.FC = () => {
  const clienteRef = React.useRef(null)

  const responsive = {
    fullhd: {
      breakpoint: { max: 3000, min: 992 },
      items: 6,
      partialVisibilityGutter: 520,
      slidesToSlide: 6
    },
    mobile: {
      breakpoint: { max: 991, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  }

  // setInterval(() => {
  //   if (clienteRef) {
  //     if (clienteRef.current) {
  //       const current = clienteRef.current.scrollLeft
  //       clienteRef.current.scrollTo(current + 10, 0)
  //       console.log(current)
  //     }
  //   }
  // }, 100)

  const [isCardsSectionCardsVisible, setIsCardsSectionVisible] =
    useState<boolean>(false)
  const cardsSectionRef = useRef<HTMLDivElement>(null)

  const getSectionPosition = useCallback(() => {
    const { y } = cardsSectionRef.current?.getBoundingClientRect()
    const elementPosition = cardsSectionRef.current?.offsetTop

    if (y <= elementPosition * 1.9) {
      setIsCardsSectionVisible(true)
    }
  }, [])

  const removeGetSectionPosition = useCallback(
    () => window.removeEventListener('scroll', getSectionPosition),
    [getSectionPosition]
  )

  useEffect(() => {
    if (!isCardsSectionCardsVisible) {
      getSectionPosition()
      window.addEventListener('scroll', getSectionPosition)
    } else {
      removeGetSectionPosition()
    }

    return () => removeGetSectionPosition()
  }, [getSectionPosition, isCardsSectionCardsVisible, removeGetSectionPosition])

  return (
    <CostumersWrapper className="container" id="clientes">
      <motion.div
        ref={cardsSectionRef}
        initial="right"
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.8 }}
        variants={{
          right: {
            // x: 100,
            opacity: 0,
            y: -100
          }
        }}
      >
        <div className="upSide">
          <Title>Alguns dos nossos clientes</Title>
          <Subtitle>
            Grandes marcas, pequenos negócios, novas startups e indivíduos
            <br />
            <strong> Estamos prontos para te atender!</strong>
          </Subtitle>
        </div>
      </motion.div>
      <motion.div
        className="sec-two"
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
        <div className="down">
          <Carousel
            // customTransition="all 2s"
            showDots
            // partialVisible={true}
            responsive={responsive}
            // beforeChange={(slidePosition) => {
            //   handleClick(slidePosition)
            // }}
            autoPlay={true}
            autoPlaySpeed={8000}
            infinite={true}
            transitionDuration={2000}
            removeArrowOnDeviceType={['tablet', 'mobile', 'fullhd', 'desktop']}
            draggable={true}
            renderDotsOutside={true}

            // afterChange={() => {
            //   handleClick()
            // }}
          >
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
          </Carousel>
        </div>
      </motion.div>
    </CostumersWrapper>
  )
}

export default Costumer
