import Button from 'components/Button'
import Checkbox from 'components/CheckBox/CheckBox'
import Input from 'components/Input'
import Radio from 'components/Radio/Radio'
import React, { useState } from 'react'
import { FormWrapper } from './styles'
import ServicesSide from 'components/ServicesSide'

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
    motivoDaProcura: ''
  })

  const [tipoImovel, setTipoImovel] = React.useState('')
  const [terrenoRegularizado, setTerrenoRegularizado] = React.useState('')
  const [necessidadeTecnica, setNecessidadeTecnica] = React.useState([])
  const [tipoPavimento, setTipoPavimento] = useState([])
  const [tiposDeProjetos, setTiposDeProjetos] = React.useState([])
  // const [cor, setCor] = React.useState('')

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('bateu aqui')
    const allTiposProjetos = tiposDeProjetos.join()
    const allNecessidadeTec = necessidadeTecnica.join()
    const allTipoPavimento = tipoPavimento.join()

    window.open(
      `https://api.whatsapp.com/send?phone=5571991889796&text=*NOME*: ${form.nome}%0a*NUMERO*: ${form.contato}%0a*EMAIL*: ${form.email}%0a*ENDEREÇO*: ${form.endereco}%0a*TIPO DE IMÓVEL*: ${tipoImovel}%0a*NECESSIDADE TÉCNICA*: ${allNecessidadeTec} %0a*ÁREA DO TERRENO*: ${form.areaDoTerreno}m2 %0a*TERRENO REGULARIZADO*: ${terrenoRegularizado} %0a*QUANTIDADE DE PAVIMENTOS*: ${form.quantidadeDePavimentos} - ${allTipoPavimento} %0a*TIPOS DE PROJETOS*: ${allTiposProjetos} %0a*MOTIVO DE PROCURA*: ${form.motivoDaProcura}`
    )
  }

  function handleChange({ target }) {
    const { id, value } = target

    setForm({ ...form, [id]: value })
  }

  return (
    <FormWrapper
      className="container"
      onSubmit={(e) => {
        handleClick(e)
      }}
    >
      <div className="row justify-content-center gx-5 mt-5">
        <div className="title col-12 col-md-8">
          <h1>Orçamento</h1>
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
            placeholder="Seu nome completo"
          />
          <Input
            label="Número de Contato:"
            id="contato"
            value={form.contato}
            onChange={handleChange}
            mask={'(99) 99999-9999'}
            placeholder="(12) 91234-5678"
          />
          <Input
            label="E-mail:"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seuemail@mail.com.br"
          />
          <Input
            label="Endereço:"
            id="endereco"
            value={form.endereco}
            onChange={handleChange}
            placeholder="Rua, Avenida..."
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
              value={necessidadeTecnica}
              setValue={setNecessidadeTecnica}
            />
          </div>
          <Input
            label="Área do terreno:"
            id="areaDoTerreno"
            value={form.areaDoTerreno}
            onChange={handleChange}
            placeholder="m2"
            type="number"
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
            type="number"
          />
          <div className="checkbox row">
            <Checkbox
              options={['Térreo', 'Superior', 'Edifício']}
              value={tipoPavimento}
              setValue={setTipoPavimento}
            />
          </div>
          <h5>Tipos de projetos:</h5>
          <div className="checkbox row">
            {/* {tiposDeProjetos} */}
            <Checkbox
              options={['Reforma', 'Construção', 'Interiores']}
              value={tiposDeProjetos}
              setValue={setTiposDeProjetos}
            />
          </div>
          {/* <h5>Motivo da procura:</h5> */}
          <Input
            label="Motido da procura:"
            id="motivoDaProcura"
            value={form.motivoDaProcura}
            onChange={handleChange}
            placeholder="Conte para nós o motivo da procura"
          />
          <Button width="100%">Enviar</Button>
        </form>
        <ServicesSide />
      </div>
    </FormWrapper>
  )
}

export default Form
