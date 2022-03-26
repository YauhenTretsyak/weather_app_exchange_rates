import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';
import { HelmetBlock } from './blocks';
import { Header, Weather, Footer } from './components';
import favicon from './assets/favicon.png';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <HelmetBlock
          title={ 'Weather' }
          name={ 'Weather' }
          content={ 'weather' }
          description='Weather'
          faviconUrl={ favicon }
        />
        <Header />
        <Weather />
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
