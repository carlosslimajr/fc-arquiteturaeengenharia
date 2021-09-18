import Button from 'components/Button/'
import { Subtitle } from 'components/commonStyles'
import React from 'react'
import { LandingWrapper } from './styles'
import Image from 'next/image'
import Foto from '../../../public/land.jpg'

const Landing = () => {
  return (
    <LandingWrapper className="container">
      <div className="row cont">
        <div className="leftSide">
          <h1>Trazemos sempre a melhor solução para seu projeto</h1>
          <p>
            Alinhados na melhor técnica e no menor custo possível para sua
            família ou seu negócio!
          </p>
          <Button>Peça um orçamento</Button>
        </div>
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
      </div>
    </LandingWrapper>
  )
}

export default Landing
