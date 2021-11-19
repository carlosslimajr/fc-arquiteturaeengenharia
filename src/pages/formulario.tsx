import Form from 'components/Formulario'
import SeoComponent from 'components/SeoComponent'
import React from 'react'

const Formulario = () => {
  return (
    <main>
      <SeoComponent
        title="Formulário | FC Arquitetura e Engenharia"
        desc="Escritorio de arquitetura e engenharia com diversas soluções residenciais, comerciais e industriais."
        url="https://www.fcarquiteturaeengenharia.com.br/"
        keywords="arquitetura decoração engenharia reforma obra projeto feira de santana"
      />
      <Form />
    </main>
  )
}

export default Formulario
