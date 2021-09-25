import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FooterWrapper } from './styles'
// import logo from 'assets/logo.png'
import Button from 'components/Button/'
import Contact from 'components/Contact'
import Image from 'next/image'
import InstaSvg from '../../../public/insta.svg'
const Footer = () => {
  const router = useRouter()

  return (
    <>
      <Contact />
      <FooterWrapper>
        <div className="container">
          <div className="row justify-content-around grid">
            <section className="col-12 col-lg-3">
              <Image
                src="/logo.png"
                alt="Foto exemplo"
                width="110px"
                height="92px"
                className="imagi"
              />

              <p className="text">
                Somos um escritório profissional de arquitetura e engenharia.
                Elaboramos soluções, removemos barreiras e entregamos o melhor
                resultado com menor custo possível para o seu negócio ou sua
                família
              </p>
            </section>
            <section className="col-12 col-lg-3">
              <h5> Mapa do site</h5>
              <ul>
                <li>Quem somos</li>
                <li>Nossos serviços</li>
                <li>Clientes</li>
                <li>Peça um orçamento</li>
              </ul>
            </section>
            <section className="col-12 col-lg-3">
              <h5>Nossos Serviços</h5>
              <ul>
                <li>Visita Técnica</li>
                <li>Consultoria Técnica</li>
                <li>Projeto de Edificações/Legal</li>
                <li>Projeto Arquitetônico</li>
                <li>Arquitetura de Interiores</li>
                <li>Projetos Complementares</li>
                <li>Regularização Imobiliária</li>
              </ul>
            </section>
            <section className="col-12 col-lg-3">
              <h5>Contato</h5>
              <ul>
                <li>fcs.engenharia@yahoo.com.br</li>
                <li>+55 (71) 9208-8294</li>
                <li>
                  Rua Campos Sales, 478 - Ponto Central Feira de Santana - BA,
                  44052-526
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fc.arquiteturaeengenharia/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstaSvg />
                  </a>
                </li>
              </ul>
              {/* <Link href="/formulario">
                <Button width="230px" height="45px">
                  Peça um orçamento
                </Button>
              </Link> */}
            </section>
          </div>

          <p className="copyright">© 2021 FC Arquitetura e Engenharia</p>
        </div>
      </FooterWrapper>
    </>
  )
}

export default Footer
