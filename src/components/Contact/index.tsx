import React from 'react'
import { ContactWrapper } from './styles'
// import contactPic from 'assets/contact.png'
import Button from 'components/Button/'
import Image from 'next/image'
import useMediaQuery from 'hooks/useMediaQuery'
const Contact = () => {
  const mobile = useMediaQuery('(max-width: 991px)')
  return (
    <ContactWrapper>
      <div className="container content">
        {!mobile && (
          <div className="leftside">
            <div className="imagecontainer">
              <Image
                src="/contact.png"
                alt="Foto exemplo"
                width="350px"
                height="462px"
                className="imagi"
              />
            </div>
          </div>
        )}

        <aside>
          <h3>Trabalhe conosco</h3>
          <p>
            Estamos sempre em busca de pessoas dedicadas e que trabalham com
            muito amor, carinho e dedicação.
          </p>
          <p>
            Se você é uma dessas pessoas, venha fazer parte da nossa família!
          </p>
          <Button>Quero fazer parte!</Button>
        </aside>
      </div>
    </ContactWrapper>
  )
}

export default Contact
