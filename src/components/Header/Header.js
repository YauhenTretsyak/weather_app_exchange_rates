import {memo} from 'react'
import {useSelector} from 'react-redux'
import {ExchangeRatesHeader, BanLocalizationMenu, LoadingSpinner} from '../../blocks'
import {HeaderSection, HeaderTitle, CityTitle, SearchButton, Button} from './Header.styles'


const Header = () => {

    const data = new Date()
    const day = data.getDate() < 10 ? `0${ data.getDate() }` : data.getDate()
    const year = data.getFullYear() < 10 ? `0${ data.getFullYear() }` : data.getFullYear()
    const mounth = data.getMonth() < 9 ? `0${ data.getMonth() + 1 }` : data.getMonth() + 1
    const dateToday = `${ day }.${ mounth }.${ year }`
 
    const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city)
    const country = useSelector((state) => state.fiveDaysWeather.country)
    const isLoadingData = useSelector((state) => state.locationData.loading)
     
    return (
        <HeaderSection>
            <BanLocalizationMenu />
            <HeaderTitle dateToday={ dateToday }>
                <CityTitle>City: </CityTitle> 
                {isLoadingData 
                    ? <LoadingSpinner
                        loading={isLoadingData}
                        titleSize="2.5"
                        color="#00ff04"
                        size={40}
                    /> 
                    : <>{ city }, { country }</>} 

                <SearchButton selector="#search_section">
                    <Button>
            Find city
                    </Button>
                </SearchButton>
            </HeaderTitle>
            <ExchangeRatesHeader />
        </HeaderSection>
    )
}

export default memo(Header)