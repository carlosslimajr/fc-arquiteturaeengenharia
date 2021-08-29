import React from 'react';

const types = {
  text: {
    regex: /[0-9a-zA-Z]{4,}/,
    message: 'No mínimo 4 letras',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  password: {
    regex: /[0-9a-zA-Z]{6,}/,
    message: 'No mínimo 6 letras',
  },
  phone: {
    regex:
      /(?:^\([0]?[1-9]{2}\)[\s]?|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/,
    message: 'Número de telefone inválido',
  },
};

const useForm = type => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(val) {
    if (type === false) return true;
    if (types[type] && !types[type].regex.test(val)) {
      setError(types[type].message);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
