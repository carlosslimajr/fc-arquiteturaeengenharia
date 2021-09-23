import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  slidesToShowPlugin,
  slidesToScrollPlugin
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slider from 'react-slick'
import { ServicesWrapper } from './styles'
import 'swiper/css/bundle'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Pagination, EffectCards } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCards, Pagination])

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Title } from 'components/commonStyles'
import ServicesText from './TextComponent'
import TextComponent from './TextComponent'
// Import Swiper styles

const Services = () => {
  const [selectedImg, setSelectedImg] = useState(0)

  function handleClick(position) {
    setSelectedImg(position)
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <ServicesWrapper>
      <div className="container">
        <div className="top">
          <Title className="title">Nosso Serviços</Title>
          {selectedImg === 0 && (
            <TextComponent
              subtitle="Visita Técnica"
              text="Serviço presencial cujo objetivo é verificar situação ou condições
            técnicas necessárias para elaboração de projetos, execução de obras,
            encaminhamento de estudos complementares para patologias de obras."
            />
          )}
          {selectedImg === 1 && (
            <TextComponent
              subtitle="Consultoria Técnica"
              text="Serviço técnico de avaliação, análise detalhada para resolução de problemas técnicos através de pesquisa e serviços específicos com garantia de resultado e retorno desejado."
            />
          )}
          {selectedImg === 2 && (
            <TextComponent
              subtitle="Projeto de Edificações/Legal
              "
              text="Pacote de plantas técnicas básicas para execução de serviços de construção, reforma ou ampliação de edificações."
            />
          )}
          {selectedImg === 3 && (
            <TextComponent
              subtitle="Projeto Arquitetônico"
              text="Um projeto de arquitetura, conceitualmente, é formado por uma série de estudos, representações gráficas e desenhos técnicos criados com o objetivo de guiar uma construção ou reformar um imóvel."
            />
          )}
          {selectedImg === 4 && (
            <TextComponent
              subtitle="Arquitetura de Interiores
              "
              text="A arquitetura de interiores consiste num trabalho de desenvolvimento dos ambientes internos de uso com móveis, decorativos e equipamentos úteis para uma residência ou corporativo."
            />
          )}
        </div>

        <Carousel
          // customTransition="all 2s"
          // showDots
          partialVisible={true}
          responsive={responsive}
          beforeChange={(slidePosition) => {
            handleClick(slidePosition)
          }}
          // afterChange={() => {
          //   handleClick()
          // }}
        >
          <img src="/exemplo.png" />
          <img src="/exemplo.png" />
          <img src="/exemplo.png" />
          <img src="/exemplo.png" />
        </Carousel>
      </div>
    </ServicesWrapper>
  )
}

export default Services
