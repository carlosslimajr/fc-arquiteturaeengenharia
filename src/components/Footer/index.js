import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FooterWrapper } from './styles';
import logo from 'assets/logo.png';
import Button from 'components/Button/Button';

const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrapper>
      <div className="container">
      <div className="grid">
        <section>
          <img src={logo} />
          <p className="text">
            Somos um escritório profissional de arquitetura e engenharia.
            Elaboramos soluções, removemos barreiras e entregamos o melhor
            resultado com menor custo possível para o seu negócio ou sua família
          </p>
        </section>
        <section>
          <h5> Mapa do site</h5>
          <ul>
            <li>Quem somos</li>
            <li>Nossos serviços</li>
            <li>Clientes</li>
            <li>Peça um orçamento</li>
          </ul>
        </section>
        <section>
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
        <section>
          <h5>Contato</h5>
          <ul>
            <li>fcs.engenharia@yahoo.com.br</li>
            <li>+55 (71) 9208-8294</li>
            <li>
              Rua Campos Sales, 478 - Ponto Central Feira de Santana - BA,
              44052-526
            </li>
            {/* <li>insta</li> */}
          </ul>
          <Button width="230px" height="45px">Peça um orçamento</Button>
        </section>
      </div>
      

      <p className="copyright">© 2021 FC Arquitetura e Engenharia | All Rights Reserved.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
