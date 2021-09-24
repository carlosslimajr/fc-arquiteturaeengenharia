import Button from 'components/Button'
import Checkbox from 'components/CheckBox/CheckBox'
import Input from 'components/Input'
import Radio from 'components/Radio/Radio'
import React, { useState } from 'react'
import { FormWrapper, RightSide } from '../Formulario/styles'

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
  const [value, setValue] = useState('')

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleClick(e) {
    e.preventDefault()
    console.log('bateu aqui')
    const allPerfil = perfilCliente.join()
    const allAmbientes = ambientes.join()
    // const allTipoPavimento = tipoPavimento.join()

    window.open(
      `https://api.whatsapp.com/send?phone=5575992604333&text=*PERFIL DO CLIENTE*:${allPerfil} / FAIXA ETÁRIA : ${form.faixaEtaria} / ESTILO: ${form.estilo} / INTERESSE POR ARTE : ${arte} /  PREFERÊNCIA MUSICAL: ${form.preferenciaMusical} / PREFERÊNCIA CINEMATOGRÁFICA: ${form.preferenciaCinematografica} / RELIGIOSO: ${religioso} / QUANTIDADE DE MORADORES: ${form.moradores} / ANIMAIS DOMÉSTICOS: ${form.animais} / HOBBIES PRATICADOS: ${form.hobbies} / COSTUMA RECEBER VISITAS : ${visita} / COSTUMA TRABALHAR EM CASA: ${trabalhaEmCasa} / POSSUI CRIANÇAS: ${form.criancas} / CORES DESEJADAS: ${form.cores} / ESTILO ARQUITETÔNICO ${form.estiloArquitetonico} / GOSTA DE PLANTAS : ${plantas} / PREFERE QUENTE OU FRIO: ${clima} / PALETA DE CORES : ${paletaCor} / VALOR PRETENDIDO: ${form.valorPretendido} / PRAZO PARA MUDANÇA ${form.prazoMudanca} / AMBIENTES : ${ambientes}`
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
              {' '}
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
                  options={['Sim', 'Não']}
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
              <Input
                label="Valor pretendido para investimento"
                placeholder="R$ 10.123,56...."
                value={form.valorPretendido}
                id="valorPretendido"
                onChange={handleChange}
              />
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
                Próximo
              </Button>
            </>
          )}
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

export default Briefing
