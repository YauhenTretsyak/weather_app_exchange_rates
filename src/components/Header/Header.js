import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ExchangeRatesHeader, BanLocalizationMenu } from '../../blocks';

import { HeaderSection, HeaderTitle, SearchButton, Button } from './Header.styles';


const Header = () => {

  let data = new Date();
  let day = data.getDay() < 10 ? `0${ data.getDay() }` : data.getDay();
  let year = data.getFullYear() < 10 ? `0${ data.getFullYear() }` : data.getFullYear();
  let mounth = data.getMonth() < 10 ? `0${ data.getMonth() }` : data.getMonth();

  const dateToday = `${ day }.${ mounth }.${ year }`

  // const testClick = () => {
  //   let test = '2022-03-27 18:00:00'.slice(11);
  //   let test2 = '2022-03-27 18:00:00'.slice(0, 10);
  //   console.log(test)
  //   console.log(test2)
  // }
  
 
  const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city);
  const country = useSelector((state) => state.fiveDaysWeather.country);
  console.log(dateToday)
     
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
      {/* <button onClick={ testClick }>On</button> */}
      <ExchangeRatesHeader />
    </HeaderSection>
  )
}

export default memo(Header);