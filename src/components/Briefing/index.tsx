import CurrencyInput from 'react-currency-input-field'
import Button from 'components/Button'
import Checkbox from 'components/CheckBox/CheckBox'
import Input from 'components/Input'
import Radio from 'components/Radio/Radio'
import ServicesSide from 'components/ServicesSide'
import React, { useState } from 'react'
import { FormWrapper, RightSide } from '../Formulario/styles'
import IntlCurrencyInput from 'react-intl-currency-input'

const Briefing = () => {
  const [form, setForm] = useState({
    faixaEtaria: '',
    estilo: '',
    preferenciaMusical: '',
    preferenciaCinematografica: '',
    moradores: '',
    animais: '',
    hobbies: '',
    criancas: '',
    cores: '',
    estiloArquitetonico: '',
    valorPretendido: '',
    prazoMudanca: ''
  })
  const [perfilCliente, setPerfilCliente] = useState([])
  const [ambientes, setAmbientes] = useState([])
  const [arte, setArte] = useState('')
  const [religioso, setReligioso] = useState('')
  const [visita, setVisita] = useState('')
  const [trabalhaEmCasa, setTrabalhaEmCasa] = useState('')
  const [plantas, setPlantas] = useState('')
  const [clima, setClima] = useState('')
  const [paletaCor, setPaletaCor] = useState('')
  const [stepper, setStepper] = useState(0)
  const [valorPretendido, setValorPretendido] = useState('')

  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      }
    }
  }

  function formatReal(int) {
    let tmp = int + ''
    tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

    return tmp
  }

  function handleChange({ target }) {
    let { value } = target
    const { id } = target

    if (id === 'valorPretendido') {
      value = formatReal(value)
    }
    setForm({ ...form, [id]: value })
  }

  function handleClick(e) {
    e.preventDefault()

    const allPerfil = perfilCliente.join()
    const allAmbientes = ambientes.join()
    // const allTipoPavimento = tipoPavimento.join()

    window.open(
      `https://api.whatsapp.com/send?phone=5571991889796&text=*PERFIL DO CLIENTE*: ${allPerfil} %0a*FAIXA ETÁRIA*: ${form.faixaEtaria} %0a*ESTILO*: ${form.estilo} %0a*INTERESSE POR ARTE*: ${arte} %0a*PREFERÊNCIA MUSICAL*: ${form.preferenciaMusical} %0a*PREFERÊNCIA CINEMATOGRÁFICA*: ${form.preferenciaCinematografica} %0a*RELIGIOSO*: ${religioso} %0a*QUANTIDADE DE MORADORES*: ${form.moradores} %0a*ANIMAIS DOMÉSTICOS*: ${form.animais} %0a*HOBBIES PRATICADOS*: ${form.hobbies} %0a*COSTUMA RECEBER VISITAS*: ${visita} %0a*COSTUMA TRABALHAR EM CASA*: ${trabalhaEmCasa} %0a*POSSUI CRIANÇAS*: ${form.criancas} %0a*CORES DESEJADAS*: ${form.cores} %0a*ESTILO ARQUITETÔNICO*: ${form.estiloArquitetonico} %0a*GOSTA DE PLANTAS*: ${plantas} %0a*PREFERE QUENTE OU FRIO*: ${clima} %0a*PALETA DE CORES*: ${paletaCor} %0a*VALOR PRETENDIDO*: R$${valorPretendido} %0a*PRAZO PARA MUDANÇA*: ${form.prazoMudanca} %0a*AMBIENTES*: ${allAmbientes}`
    )
  }

  const prevStep = (e: any) => {
    if (stepper !== 0) {
      setStepper(stepper - 1)
    }
  }
  const nextStep = (e: any) => {
    e.preventDefault()
    // alert('bateu aqui')
    window.scrollTo(0, 0)
    if (stepper < 1) {
      setStepper(stepper + 1)
    }
  }

  const handleChange2 = (event, value) => {
    event.preventDefault()
    setValorPretendido(
      value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
    )
  }

  return (
    <FormWrapper className="container">
      <div className="row justify-content-center gx-5 mt-5">
        <div className="title col-12 col-md-8">
          <h1>Briefing de Integração</h1>
          <div className="borda" />
          <div className="step">
            <span className={`${stepper === 0 && 'colored'}`}>
              <small className={`${stepper === 0 && 'colored'}`} />
              Parte 1
            </span>
            <div className="linha" />
            <span className={`${stepper === 1 && 'colored'}`}>
              <small className={`${stepper === 1 && 'colored'}`} />
              Parte 2
            </span>
          </div>
        </div>

        <form action="" className="col-12 col-lg-7">
          {stepper === 0 ? (
            <>
              <h3>Informações Básicas</h3>
              <h5>Perfil do cliente:</h5>
              <div className="checkbox">
                <Checkbox
                  options={[
                    'Família',
                    'Jovem',
                    'Recém casado',
                    'Terceira Idade',
                    'Solteiro'
                  ]}
                  value={perfilCliente}
                  setValue={setPerfilCliente}
                />
              </div>
              <Input
                label="Faixa etária:"
                placeholder="18, 25, 35..."
                id="faixaEtaria"
                value={form.faixaEtaria}
                onChange={handleChange}
                type="number"
              />
              <Input
                label="Estilo:"
                placeholder="Moderno, clássico, art deco..."
                id="estilo"
                value={form.estilo}
                onChange={handleChange}
              />
              <h3>Questões Culturais:</h3>
              <h5>Você se interessa por arte?</h5>
              <div className="checkbox">
                <Radio
                  options={['Sim', 'Não']}
                  value={arte}
                  setValue={setArte}
                />
              </div>
              <Input
                label="Preferência musical:"
                placeholder="Pagode, sertanejo, rock, clássica"
                value={form.preferenciaMusical}
                id="preferenciaMusical"
                onChange={handleChange}
              />
              <Input
                label="Preferência cinematográfica:"
                placeholder="Aventura, terror, romance..."
                value={form.preferenciaCinematografica}
                id="preferenciaCinematografica"
                onChange={handleChange}
              />
              <h5>Se considera religioso?</h5>
              <div className="checkbox">
                <Radio
                  options={['Sim', 'Não']}
                  value={religioso}
                  setValue={setReligioso}
                />
              </div>
              <h3>Ambiente familiar:</h3>
              <Input
                label="Quantos moradores há na casa?"
                placeholder="1, 2, 3..."
                value={form.moradores}
                id="moradores"
                onChange={handleChange}
                type="number"
              />
              <Input
                label="Possui animais domésticos?"
                placeholder="Cachorro, gato, passarinho..."
                value={form.animais}
                id="animais"
                onChange={handleChange}
              />
              <Input
                label="Hobbies praticados?"
                placeholder="Pesca, música, ballet..."
                value={form.hobbies}
                id="hobbies"
                onChange={handleChange}
              />
              <h5>Costuma receber visitas?</h5>
              <div className="checkbox">
                <Radio
                  options={['Sim', 'Não']}
                  value={visita}
                  setValue={setVisita}
                />
              </div>
              <h5>Costuma trabalhar em casa?</h5>
              <div className="checkbox">
                <Radio
                  options={['Sim', 'Não']}
                  value={trabalhaEmCasa}
                  setValue={setTrabalhaEmCasa}
                />
              </div>
              <Input
                label="Possui crianças?"
                placeholder="2 crianças"
                value={form.criancas}
                id="criancas"
                onChange={handleChange}
                type="number"
              />
              <Button width="100%" onClick={(e) => nextStep(e)}>
                Próximo
              </Button>
              {/* <button onClick={nextStep()}></button> */}
            </>
          ) : (
            <>
              <h3>Preferências</h3>
              <Input
                label="Cores desejadas"
                placeholder="Verde, preto, azul marinho..."
                value={form.cores}
                id="cores"
                onChange={handleChange}
              />
              <Input
                label="Estilo arquitetônico de afinidade:"
                placeholder="Barroco, clássico, gótico..."
                value={form.estiloArquitetonico}
                id="estiloArquitetonico"
                onChange={handleChange}
              />
              <h5>Gosta de plantas?</h5>
              <div className="checkbox">
                <Radio
                  options={['Sim', 'Não']}
                  value={plantas}
                  setValue={setPlantas}
                />
              </div>
              <h5>Prefere quente ou frio ?</h5>
              <div className="checkbox">
                <Radio
                  options={['Quente', 'Frio']}
                  value={clima}
                  setValue={setClima}
                />
              </div>
              <h5>Paleta de cores ?</h5>
              <div className="checkbox">
                <Radio
                  options={['Escura', 'Clara']}
                  value={paletaCor}
                  setValue={setPaletaCor}
                />
              </div>
              <h5>Valor pretendido para investimento</h5>
              <div className="input">
                <IntlCurrencyInput
                  currency="BRL"
                  config={currencyConfig}
                  onChange={handleChange2}
                  value={valorPretendido}
                />
              </div>
              <Input
                label="Prazo para mudança"
                placeholder="30 dias..."
                value={form.prazoMudanca}
                id="prazoMudanca"
                onChange={handleChange}
              />
              <h3>Ambientes</h3>
              <div className="checkbox">
                <Checkbox
                  options={[
                    'Sala de estar',
                    'Sala de Jantar',
                    'Sala de Videos',
                    'Hall',
                    'Gourmet',
                    'Closet',
                    'Cozinha',
                    'Escritório',
                    'Varanda',
                    'Lavabo',
                    'Banheiro Social',
                    'Suíte',
                    'Quarto',
                    'Garagem'
                  ]}
                  value={ambientes}
                  setValue={setAmbientes}
                />
              </div>
              <Button width="100%" onClick={(e) => handleClick(e)}>
                Enviar
              </Button>
            </>
          )}
        </form>
        <ServicesSide />
      </div>
    </FormWrapper>
  )
}

export default Briefing
