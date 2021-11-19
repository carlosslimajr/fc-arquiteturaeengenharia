import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import Costumer from 'components/Costumers'
import Landing from 'components/Landing'
import SeoComponent from 'components/SeoComponent'
import Services from 'components/Services'

export default function Home() {
  return (
    <main>
      <SeoComponent
        title="FC Arquitetura e Engenharia"
        desc="Escritorio de arquitetura e engenharia com diversas soluções residenciais, comerciais e industriais."
        url="https://www.fcarquiteturaeengenharia.com.br/"
        keywords="FC arquitetura e engenharia decoração reforma obra projeto feira de santana fsa salvador construção casa interiores"
      />
      <Landing />
      <Costumer />
      <AboutUs />
      <Banner />
      <Services />
    </main>
  )
}
