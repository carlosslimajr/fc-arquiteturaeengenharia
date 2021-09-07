import React from 'react';
import { BannerWrapper } from './styles';
import houseIcon from 'assets/house-icon.png';
const Banner = () => {
  return (
    <BannerWrapper className="container">
      <div className="iconBackground">
        <img src={houseIcon} alt="Icone de uma casa" />
      </div>

      <p>
        Engenharia e Arquitetura juntos para trazer sempre a melhor solução para
        seu projeto
      </p>
      <p>
        Alinhados na melhor técnica e no menor custo possível para sua família
        ou seu negócio
      </p>
    </BannerWrapper>
  );
};

export default Banner;
