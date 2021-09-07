import React from 'react';
import { ContactWrapper } from './styles';
import contactPic from 'assets/contact.png';
import Button from 'components/Button/Button';
const Contact = () => {
  return (
    <ContactWrapper>
      <div className="container content">
        <div className="leftside">
          <img src={contactPic} alt="Foto FC Arquitetura e Engenharia" />
        </div>
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
  );
};

export default Contact;
