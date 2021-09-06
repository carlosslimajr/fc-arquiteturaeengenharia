import AboutUs from 'components/AboutUs';
import Costumer from 'components/Costumers';
import Landing from 'components/Landing';
import Services from 'components/Services';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Pagina Index</title>
      </Head>
      <Landing />
      <Costumer />
      <AboutUs />
      <Services />
    </>
  );
};

export default Home;
