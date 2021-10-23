import React from 'react'
import { ServicesSideWrapper } from './styles'
import InstaSvg from '../../../public/insta.svg'
import ContatoSvg from '../../../public/contato.svg'

const ServicesSide = () => {
  return (
    <ServicesSideWrapper className="col-12 col-lg-5">
      <div className="contact">
        <p>
          <ContatoSvg />
        </p>
        <h5>Contato</h5>
        <p>fcs.engenharia@yahoo.com.br</p>
        <p>+55 71 9188-9796</p>
        <p>
          Rua Campos Sales, 478 - Ponto Central Feira de Santana - BA, 44052-526
        </p>
        <p>
          <a
            href="https://www.instagram.com/fc.arquiteturaeengenharia/"
            target="_blank"
            rel="noreferrer"
          >
            <InstaSvg />
          </a>
        </p>
      </div>

      <div className="services">
        <h4>Nossos serviços</h4>
        <div className="service">
          <h5>Visita Técnica</h5>
          <p>
            Serviço presencial cujo objetivo é verificar situação ou condições
            técnicas necessárias para elaboração de projetos, execução de obras,
            encaminhamento de estudos complementares para patologias de obras.
          </p>
        </div>
        <div className="service">
          <h5>Consultoria Técnica</h5>
          <p>
            Serviço técnico de avaliação, análise detalhada para resolução de
            problemas técnicos através de pesquisa e serviços específicos com
            garantia de resultado e retorno desejado.
          </p>
        </div>
        <div className="service">
          <h5>Projeto de Edificações/Legal</h5>
          <p>
            Pacote de plantas técnicas básicas para execução de serviços de
            construção, reforma ou ampliação de edificações.
          </p>
        </div>
        <div className="service">
          <h5>Projeto Arquitetônico</h5>
          <p>
            Um projeto de arquitetura, conceitualmente, é formado por uma série
            de estudos, representações gráficas e desenhos técnicos criados com
            o objetivo de guiar uma construção ou reformar um imóvel.
          </p>
        </div>
        <div className="service">
          <h5>Arquitetura de Interiores</h5>
          <p>
            A arquitetura de interiores consiste num trabalho de desenvolvimento
            dos ambientes internos de uso com móveis, decorativos e equipamentos
            úteis para uma residência ou corporativo.
          </p>
          <p className="last">e muito mais ...</p>
          <button className="button">Conheça mais</button>
        </div>
      </div>
    </ServicesSideWrapper>
  )
}

export default ServicesSide
