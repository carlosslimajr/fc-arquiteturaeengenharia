import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BannerWrapper } from './styles'
import houseIcon from 'assets/house-icon.png'
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

const Banner = () => {
  const [isCardsSectionCardsVisible, setIsCardsSectionVisible] =
    useState<boolean>(false)
  const cardsSectionRef = useRef<HTMLDivElement>(null)

  const getSectionPosition = useCallback(() => {
    const { y } = cardsSectionRef.current?.getBoundingClientRect()
    const elementPosition = cardsSectionRef.current?.offsetTop
    if (y <= 700) {
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
    <motion.div
      ref={cardsSectionRef}
      initial="hidden"
      animate={isCardsSectionCardsVisible && { y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.8 }}
      variants={{
        hidden: {
          // x: 100,
          opacity: 0,
          y: 150
        }
      }}
    >
      <BannerWrapper className="container">
        <div className="iconBackground">
          <img src={houseIcon} alt="Icone de uma casa" />
        </div>

        <p>
          Engenharia e Arquitetura juntos para trazer sempre a melhor solução
          para seu projeto
        </p>
        <p>
          Alinhados na melhor técnica e no menor custo possível para sua família
          ou seu negócio
        </p>
      </BannerWrapper>
    </motion.div>
  )
}

export default Banner
