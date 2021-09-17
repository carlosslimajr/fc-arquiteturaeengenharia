import Button from 'components/Button'
import Input from 'components/Input'
import React from 'react'
import { FormWrapper, RightSide } from './styles'

const Form = () => {
  return (
    <FormWrapper className="container">
      <div className="row justify-content-center gx-5">
        <div className="title col-12 col-md-8">
          <h1>Formulário de acesso livre</h1>
          <p>
            Este formulário dá ao Escritório informações básicas para
            entendimento da necessidade e contextualização para levantamento de
            orçamento prévio.
          </p>
          <div className="borda" />
        </div>

        <form action="" className="col-12 col-lg-7">
          <h3>Informações Básicas</h3>

          <Input label="Nome completo:" />
          <Input label="Número de Contato:" />
          <Input label="E-mail:" />
          <Input label="Endereço:" />
          <h3>Questões de uso</h3>
          {/* {FAZ UM COMPONENTE DISSO AQUI PELO AMOR DE DEUS} */}
          <h5>Tipo de imóvel:</h5>
          <div className="checkbox">
            <div className="box">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">Residencial</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Comercial</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="3" />
              <label htmlFor="3">Industrial</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="4" />
              <label htmlFor="4">Misto</label>
            </div>
          </div>
          <h5>Necessidade técnica:</h5>
          <div className="checkbox">
            <div className="box">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">Projeto</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Obra</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="3" />
              <label htmlFor="3">Consultoria</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="4" />
              <label htmlFor="4">Outros</label>
            </div>
          </div>
          <Input label="Área do terreno:" />
          <h5>Terreno regularizado:</h5>
          <div className="checkbox">
            <div className="box">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">Sim</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Não</label>
            </div>
          </div>
          <Input label="Quantidade de pavimentos:" />
          <div className="checkbox row">
            <div className="box">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">Térreo</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Superior</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Edifício</label>
            </div>
          </div>
          <h5>Tipos de projetos:</h5>
          <div className="checkbox row">
            <div className="box">
              <input type="checkbox" name="" id="1" />
              <label htmlFor="1">Reforma</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="2" />
              <label htmlFor="2">Construção</label>
            </div>
            <div className="box">
              <input type="checkbox" name="" id="3" />
              <label htmlFor="3">Interiores</label>
            </div>
          </div>
          <h5>Motivo da procura:</h5>
          <textarea name="" id="" cols={33} rows={10}></textarea>
          <Button width="100%">Enviar</Button>
        </form>
        <RightSide className="col-12 col-lg-5">
          <div className="contact">
            <h5>Contato</h5>
            <p>email@email.com</p>
            <p>557599999999</p>
            <p>
              Rua Campos Sales, 478 - Ponto Central Feira de Santana - BA,
              44052-526
            </p>
            <p>Insta</p>
          </div>

          <div className="services">
            <h4>Nossos serviços</h4>
            <div className="service">
              <h5>Visita Técnica</h5>
              <p>
                Serviço presencial cujo objetivo é verificar situação ou
                condições técnicas necessárias para elaboração de projetos,
                execução de obras, encaminhamento de estudos complementares para
                patologias de obras.
              </p>
            </div>
            <div className="service">
              <h5>Visita Técnica</h5>
              <p>
                Serviço presencial cujo objetivo é verificar situação ou
                condições técnicas necessárias para elaboração de projetos,
                execução de obras, encaminhamento de estudos complementares para
                patologias de obras.
              </p>
            </div>
            <div className="service">
              <h5>Visita Técnica</h5>
              <p>
                Serviço presencial cujo objetivo é verificar situação ou
                condições técnicas necessárias para elaboração de projetos,
                execução de obras, encaminhamento de estudos complementares para
                patologias de obras.
              </p>
            </div>
            <div className="service">
              <h5>Visita Técnica</h5>
              <p>
                Serviço presencial cujo objetivo é verificar situação ou
                condições técnicas necessárias para elaboração de projetos,
                execução de obras, encaminhamento de estudos complementares para
                patologias de obras.
              </p>
            </div>
            <div className="service">
              <h5>Visita Técnica</h5>
              <p>
                Serviço presencial cujo objetivo é verificar situação ou
                condições técnicas necessárias para elaboração de projetos,
                execução de obras, encaminhamento de estudos complementares para
                patologias de obras.
              </p>
              <p>e muito mais ...</p>
            </div>
            {/* <button>Conheça mais</button> */}
          </div>
        </RightSide>
      </div>
    </FormWrapper>
  )
}

export default Form
