import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme'
import GlobalStyle from './styles/GlobalStyle'
import {HelmetProvider} from 'react-helmet-async'
import {HelmetBlock} from './blocks'
import {Header, LongTimeWeather, Weather, Footer} from './components'
import favicon from './assets/favicon.png'

const App = () => (
    <HelmetProvider>
        <ThemeProvider theme={ theme }>
            <GlobalStyle />
            <HelmetBlock
                title="Weather"
                name="Weather"
                content="weather"
                description="Weather"
                faviconUrl={ favicon }
            />
            <Header />
            <LongTimeWeather />
            <Weather />
            <Footer />
        </ThemeProvider>
    </HelmetProvider>
)

export default App
