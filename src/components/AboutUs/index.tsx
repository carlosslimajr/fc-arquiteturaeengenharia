import React from 'react'
import { Title } from 'components/commonStyles'
import { AboutWrapper } from './styles'
import AboutPic from '../../assets/about.jpg'
import useMediaQuery from 'hooks/useMediaQuery'

const AboutUs = () => {
  const mobile = useMediaQuery('(max-width: 991px)')
  return (
    <AboutWrapper className="container" id="sobre">
      <div className="about">
        <div className="leftside">
          <Title className="title">Quem somos</Title>
          {mobile && <img src={AboutPic} alt="Foto de quem somos" />}
          <div className="text">
            <p className="bold">
              Somos um escritório profissional de prestação de serviços de
              arquitetura e engenharia.
            </p>
            <p>
              Elaboramos soluções em projetos de edificações, arquitetônicos e
              disciplinas complementares de engenharia. Também atuamos com
              consultorias, visitas técnicas e equipe completa para execução de
              obras residenciais, comerciais e industriais.
            </p>
          </div>
        </div>
        {!mobile && (
          <div className="image col-lg-6 rightside">
            <img src={AboutPic} alt="Foto de quem somos" />
          </div>
        )}
      </div>
    </AboutWrapper>
  )
}

export default AboutUs
