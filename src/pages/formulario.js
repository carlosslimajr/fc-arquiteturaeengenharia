import Costumer from 'components/Costumers';
import Form from 'components/Form/Form';
// import Services from 'components/Form/Services';
import Head from 'next/head';
import { useState } from 'react';
import Input from 'components/Input/Input';

const Formulario = () => {
  const [name, setName] = useState('');
  return (
    <>
      <Head>
        <title>Formulário de Acesso Livre</title>
      </Head>
      <Form>
        <Input
          label="Nome"
          id="nome"
          type="text"
          value={name}
          setValue={setName}
        />
      </Form>
    </>
  );
};

export default Formulario;
