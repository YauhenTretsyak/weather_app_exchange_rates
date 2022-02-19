import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import LocationContextProvider from './context/locationService';
import { HelmetProvider } from 'react-helmet-async';
import { HelmetBlock } from './blocks';
import { Header, Weather, Footer } from './components';
import favicon from './assets/favicon.png';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={ theme }>
        <LocationContextProvider>
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
        </LocationContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
