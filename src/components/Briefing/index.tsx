import Button from 'components/Button'
import Input from 'components/Input'
import React, { useState } from 'react'
import { FormWrapper, RightSide } from '../Formulario/styles'

const Briefing = () => {
  const [stepper, setStepper] = useState(0)

  const prevStep = (e: any) => {
    if (stepper !== 0) {
      setStepper(stepper - 1)
    }
  }
  const nextStep = (e: any) => {
    e.preventDefault()
    alert('bateu aqui')
    if (stepper < 1) {
      setStepper(stepper + 1)
    }
  }

  return (
    <FormWrapper className="container">
      <div className="row justify-content-center gx-5">
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
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Família</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Jovem</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="3" />
                  <label htmlFor="3">Recém casado</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="4" />
                  <label htmlFor="4">Terceira idade</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="4" />
                  <label htmlFor="4">Solteiro</label>
                </div>
              </div>
              <Input label="Faixa etária:" placeholder="18, 25, 35..." />
              <Input
                label="Estilo:"
                placeholder="Moderno, clássico, art deco..."
              />
              <h3>Questões Culturais:</h3>
              <h5>Você se interessa por arte?</h5>
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
              <Input
                label="Preferência musical:"
                placeholder="Pagode, sertanejo, rock, clássica"
              />
              <Input
                label="Preferência cinematográfica:"
                placeholder="Aventura, terror, romance..."
              />
              <h5>Se considera religioso??</h5>
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
              <h3>Ambiente familiar:</h3>
              <Input
                label="Quantos moradores há na casa?"
                placeholder="1, 2, 3..."
              />
              <Input
                label="Possui animais domésticos?"
                placeholder="Cachorro, gato, passarinho..."
              />
              <Input
                label="Hobbies praticados?"
                placeholder="Pesca, música, ballet..."
              />
              <h5>Costuma receber visitas?</h5>
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
              <h5>Costuma trabalhar em casa?</h5>
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
              <Input label="Possui crianças?" placeholder="2 crianças" />
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
              />
              <Input
                label="Estilo arquitetônico de afinidade:"
                placeholder="Barroco, clássico, gótico..."
              />
              <h5>Gosta de plantas?</h5>
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
              <h5>Prefere quente ou frio ?</h5>
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
              <h5>Paleta de cores ?</h5>
              <div className="checkbox">
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Escura</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Clara</label>
                </div>
              </div>
              <Input
                label="Valor pretendido para investimento"
                placeholder="R$ 10.123,56...."
              />
              <Input label="Prazo para mudança" placeholder="30 dias..." />
              <h3>Ambientes</h3>
              <div className="checkbox">
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Sala de estar</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Sala de jantar</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Sala de de vídeos</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Hall</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Gourmet</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Closet</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Cozinha</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Escritório</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Varanda</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Lavabo</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Banheiro social</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Suíte</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="1" />
                  <label htmlFor="1">Quarto</label>
                </div>
                <div className="box">
                  <input type="checkbox" name="" id="2" />
                  <label htmlFor="2">Garagem</label>
                </div>
              </div>
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
