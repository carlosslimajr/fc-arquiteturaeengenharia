import Costumer from 'components/Costumers';
import Services from 'components/Services';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Pagina Index</title>
      </Head>
      <Costumer />  
      <Services />
    </>
  );
};

export default Home;
