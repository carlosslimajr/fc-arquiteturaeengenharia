import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Title } from 'components/commonStyles'
import { AboutWrapper } from './styles'
import AboutPic from '../../assets/about.webp'
import useMediaQuery from 'hooks/useMediaQuery'
import { motion } from 'framer-motion'

const wrapper = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: { opacity: 0 }
}

const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
}

const AboutUs: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 991px)')

  const [isCardsSectionCardsVisible, setIsCardsSectionVisible] =
    useState<boolean>(false)
  const cardsSectionRef = useRef<HTMLDivElement>(null)

  const getSectionPosition = useCallback(() => {
    const { y } = cardsSectionRef.current?.getBoundingClientRect()
    // const elementPosition = cardsSectionRef.current?.offsetTop
    if (y <= 600) {
      setIsCardsSectionVisible(true)
    }
  }, [])

  const removeGetSectionPosition = useCallback(
    () => window.removeEventListener('scroll', getSectionPosition),
    [getSectionPosition]
  )

  useEffect(() => {
    if (!isCardsSectionCardsVisible) {
      getSectionPosition()
      window.addEventListener('scroll', getSectionPosition)
    } else {
      removeGetSectionPosition()
    }

    return () => removeGetSectionPosition()
  }, [getSectionPosition, isCardsSectionCardsVisible, removeGetSectionPosition])

  return (
    <AboutWrapper className="container" id="sobre">
      <motion.div
        ref={cardsSectionRef}
        initial="hidden"
        animate={isCardsSectionCardsVisible && { y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        variants={{
          hidden: {
            // x: 100,
            opacity: 0,
            y: 150
          }
        }}
      >
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
                consultorias, visitas técnicas e equipe completa para execução
                de obras residenciais, comerciais e industriais.
              </p>
            </div>
          </div>

          {!mobile && (
            <div className="image col-lg-6 rightside">
              <img src={AboutPic} alt="Foto de quem somos" />
            </div>
          )}
        </div>
      </motion.div>
    </AboutWrapper>
  )
}

export default AboutUs
