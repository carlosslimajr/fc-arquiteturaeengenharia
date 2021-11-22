import React, { useState } from 'react'
import { ProgressBar, ServicesWrapper } from './styles'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Title } from 'components/commonStyles'
import TextComponent from './TextComponent'
import useMediaQuery from 'hooks/useMediaQuery'
import Button from 'components/Button'

const Services: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [progress, setProgress] = useState(12.5)

  const mobile = useMediaQuery('(max-width: 991px)')
  function handleClick(position) {
    setSelectedImg(position)
    setProgress(12.5 + 12.5 * position)
    console.log(position)
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2001 },
      items: 1,
      partialVisibilityGutter: 550 // this is needed to tell the amount of px that should be visible.
    },
    fullhd: {
      breakpoint: { max: 2000, min: 1280 },
      items: 1,
      partialVisibilityGutter: 400 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1279, min: 465 },
      items: 1,
      partialVisibilityGutter: 200 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <ServicesWrapper id="servicos">
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
          {selectedImg > 4 && (
            <TextComponent
              subtitle="Outro serviço
              "
              text="A arquitetura de interiores consiste num trabalho de desenvolvimento dos ambientes internos de uso com móveis, decorativos e equipamentos úteis para uma residência ou corporativo."
            />
          )}
          {!mobile && <Button>Quero Conhecer</Button>}
        </div>
        <div className="bottom">
          <Carousel
            // customTransition="all 2s"
            // showDots
            partialVisible={true}
            responsive={responsive}
            beforeChange={(slidePosition) => {
              handleClick(slidePosition)
            }}
            focusOnSelect

            // afterChange={() => {
            //   handleClick()
            // }}
          >
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
            <img src="/exemplo.webp" />
          </Carousel>
          <div className="bar">
            <ProgressBar progress={progress}>
              <div className="progress" />
            </ProgressBar>
            <div className="counter">
              <span>0{selectedImg + 1} /</span> 08
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  )
}

export default Services
