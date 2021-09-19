import Button from 'components/Button'
import Checkbox from 'components/CheckBox/CheckBox'
import Input from 'components/Input'
import Radio from 'components/Radio/Radio'
import React from 'react'
import { FormWrapper, RightSide } from './styles'

const Form = () => {
  const [form, setForm] = React.useState({
    nome: '',
    contato: '',
    email: '',
    endereco: '',
    tipoImovel: '',
    necessidadeTecnica: '',
    areaDoTerreno: '',
    terrenoRegularizado: '',
    quantidadeDePavimentos: '',
    tipoDePavimento: '',
    tipoDeProjetos: '',
    motivoDaProucura: ''
  })

  const [tipoImovel, setTipoImovel] = React.useState('')
  const [terrenoRegularizado, setTerrenoRegularizado] = React.useState('')
  // const [cor, setCor] = React.useState('')

  function handleClick(e) {
    e.preventDefault()
    console.log('bateu aqui')

    window.open(
      `https://api.whatsapp.com/send?phone=5575992604333&text=|NOME:${form.nome}| NUMERO:${form.contato}|EMAIL:${form.email} |ENDEREÇO:${form.endereco}|TIPO DE IMÓVEL:${form.tipoImovel} |NECESSIDADE TÉCNICA:${form.necessidadeTecnica} |ÁREA DO TERRENO: ${form.areaDoTerreno} |TERRENO REGULARIZADO: ${form.terrenoRegularizado} |QUANTIDADE DE PAVIMENTOS: ${form.quantidadeDePavimentos} |TIPOS DE PROJETOS: ${form.tipoDeProjetos} |MOTIVO DE PROCURA: ${form.motivoDaProucura}`
    )
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleCheckBox({ target }) {
    // set
    console.log('target here')
    console.log(target.value)
  }
  return (
    <FormWrapper
      className="container"
      onSubmit={(e) => {
        handleClick(e)
      }}
    >
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

          <Input
            label="Nome completo:"
            id="nome"
            value={form.nome}
            onChange={handleChange}
          />
          <Input
            label="Número de Contato:"
            id="contato"
            value={form.contato}
            onChange={handleChange}
          />
          <Input
            label="E-mail:"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Endereço:"
            id="endereco"
            value={form.endereco}
            onChange={handleChange}
          />

          <h3>Questões de uso</h3>
          {/* {FAZ UM COMPONENTE DISSO AQUI PELO AMOR DE DEUS} */}
          <h5>Tipo de imóvel:</h5>

          <div className="checkbox">
            {/* {tipoImovel} */}
            <Radio
              options={['Residencial', 'Comercial', 'Industrial', 'Misto']}
              value={tipoImovel}
              setValue={setTipoImovel}
            />
          </div>
          <h5>Necessidade técnica:</h5>
          <div className="checkbox">
            <Checkbox
              options={['Projeto', 'Obra', 'Consultoria', 'Outros']}
              value={tipoImovel}
              setValue={setTipoImovel}
            />
          </div>
          <Input
            label="Área do terreno:"
            id="areaDoTerreno"
            value={form.areaDoTerreno}
            onChange={handleChange}
          />
          <h5>Terreno regularizado:</h5>
          <div className="checkbox">
            <Radio
              options={['Sim', 'Não']}
              value={terrenoRegularizado}
              setValue={setTerrenoRegularizado}
            />
          </div>
          <Input
            label="Quantidade de pavimentos:"
            id="quantidadeDePavimentos"
            value={form.quantidadeDePavimentos}
            onChange={handleChange}
          />
          <div className="checkbox row">
            <Checkbox
              options={['Térreo', 'Superior', 'Edifício']}
              value={tipoImovel}
              setValue={setTipoImovel}
            />
          </div>
          <h5>Tipos de projetos:</h5>
          <div className="checkbox row">
            <Checkbox
              options={['Reforma', 'Construção', 'Interiores']}
              value={tipoImovel}
              setValue={setTipoImovel}
            />
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
