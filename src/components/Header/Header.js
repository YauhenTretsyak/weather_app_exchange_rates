import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ExchangeRatesHeader, BanLocalizationMenu } from '../../blocks';

import { HeaderSection, HeaderTitle, SearchButton, Button } from './Header.styles';


const Header = () => {

  let data = new Date();
  let day = data.getDate() < 10 ? `0${ data.getDate() }` : data.getDate();
  let year = data.getFullYear() < 10 ? `0${ data.getFullYear() }` : data.getFullYear();
  let mounth = data.getMonth() < 10 ? `0${ data.getMonth() + 1 }` : data.getMonth() + 1;

  const dateToday = `${ day }.${ mounth }.${ year }`
 
  const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city);
  const country = useSelector((state) => state.fiveDaysWeather.country);
     
  return(
    <HeaderSection>
      <BanLocalizationMenu />
      <HeaderTitle dateToday={ dateToday }>
        City: { city }, { country }

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

export default memo(Header);