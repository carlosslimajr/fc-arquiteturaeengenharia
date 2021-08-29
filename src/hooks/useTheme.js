import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = mode => {
    if (typeof window !== 'undefined') {
      // localStorage.removeItem('theme');
      localStorage.setItem('theme', mode);
    }
  };

  const themeToggler = () => {
    return theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    let localTheme;
    if (typeof window !== 'undefined') {
      localTheme = localStorage.getItem('theme');
    }
    // eslint-disable-next-line no-unused-expressions
    localTheme ? setTheme(localTheme) : setMode('light');
    setMountedComponent(true);
  }, []);

  return { theme, changeTheme: () => themeToggler(), mountedComponent };
};
