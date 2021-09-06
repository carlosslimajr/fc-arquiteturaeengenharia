import { parseCookies } from 'helpers';
import { useTheme } from 'hooks/useTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import Header from 'components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import fundo from 'assets/fundon.jpeg';
import Footer from 'components/Footer';
const MyApp = ({ Component, pageProps, initialValues, tokenValue }) => {
  let token;
  if (tokenValue) {
    token = JSON.parse(tokenValue);
  }
  const { theme, mountedComponent } = useTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      {/* <img className="background" src={fundo}/> */}
      <ThemeProvider theme={themeMode}>
        <div className="background"/>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = ({ ctx }) => {
  const cookies = parseCookies(ctx.req);
  return { initialValues: cookies.INFO, tokenValue: cookies.TOKEN };
};

export default MyApp;
