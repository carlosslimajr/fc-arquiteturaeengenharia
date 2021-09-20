// import HomeWrapper from 'components/Home'

import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import Costumer from 'components/Costumers'
import Landing from 'components/Landing'
import Services from 'components/Services'

export default function Home() {
  return (
    <>
      <Landing />
      <Costumer />
      <AboutUs />
      <Services />
      <Banner />
    </>
  )
}
