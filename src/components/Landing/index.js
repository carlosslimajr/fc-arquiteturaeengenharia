import Button from 'components/Button/Button';
import { Subtitle } from 'components/commonStyles';
import React from 'react';
import { LandingWrapper } from './styles';
import LandingImage from 'assets/land.jpg';

const Landing = () => {
  return (
    <LandingWrapper className="container">
      <div className="leftSide">
        <h1>Trazemos sempre a melhor solução para seu projeto</h1>
        <Subtitle>
          Alinhados na melhor técnica e no menor custo possível para sua família
          ou seu negócio!
        </Subtitle>
        <Button>Peça um orçamento</Button>
      </div>
      <div>
        <img src={LandingImage} alt="Imagem FC Arquitetura e Engenharia" />
      </div>
    </LandingWrapper>
  );
};

export default Landing;
