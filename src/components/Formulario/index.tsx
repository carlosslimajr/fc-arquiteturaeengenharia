import Button from 'components/Button'
import Checkbox from 'components/CheckBox/CheckBox'
import Input from 'components/Input'
import Radio from 'components/Radio/Radio'
import React, { useState } from 'react'
import { FormWrapper, RightSide } from './styles'
import InstaSvg from '../../../public/insta.svg'
import ContatoSvg from '../../../public/contato.svg'
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

  function handleClick(e) {
    e.preventDefault()
    console.log('bateu aqui')
    const allTiposProjetos = tiposDeProjetos.join()
    const allNecessidadeTec = necessidadeTecnica.join()
    const allTipoPavimento = tipoPavimento.join()

    window.open(
      `https://api.whatsapp.com/send?phone=5575992604333&text=|*NOME*:${form.nome}/ *NUMERO*:${form.contato}/*EMAIL*:${form.email} /*ENDEREÇO*:${form.endereco}/*TIPO DE IMÓVEL*:${tipoImovel} /*NECESSIDADE TÉCNICA*:${allNecessidadeTec} /*ÁREA DO TERRENO*: ${form.areaDoTerreno} /*TERRENO REGULARIZADO*: ${terrenoRegularizado} /*QUANTIDADE DE PAVIMENTOS*: ${form.quantidadeDePavimentos} - ${allTipoPavimento} /*TIPOS DE PROJETOS*: ${allTiposProjetos} /*MOTIVO DE PROCURA*: ${form.motivoDaProcura}`
    )
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleCheckBox({ target }) {
    // set
    console.log('target heres')
    console.log(target.value)
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
              value={necessidadeTecnica}
              setValue={setNecessidadeTecnica}
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
          />
          <Button width="100%">Enviar</Button>
        </form>
        <ServicesSide />
      </div>
    </FormWrapper>
  )
}

export default Form
