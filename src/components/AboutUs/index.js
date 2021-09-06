import React from 'react';
import { ColoredBlock, Subtitle, Title } from 'components/commonStyles';
import { AboutWrapper } from './styles';
import AboutPic from 'assets/about.jpg';

const AboutUs = () => {
  return (
    <AboutWrapper className="container">
      <div className="leftSide">
        <Title className="title">Quem somos</Title>
        <div className="colored">
          <Subtitle className="bold">
            Somos um escritório profissional de prestação de serviços de
            arquitetura e engenharia.
          </Subtitle>
          <Subtitle>
            Elaboramos soluções em projetos de edificações, arquitetônicos e
            disciplinas complementares de engenharia. Também atuamos com
            consultorias, visitas técnicas e equipe completa para execução de
            obras residenciais, comerciais e industriais.
          </Subtitle>
        </div>
      </div>
      <div className="rightSide">
        <img src={AboutPic} alt="Foto de quem somos" />
      </div>
    </AboutWrapper>
  );
};

export default AboutUs;
