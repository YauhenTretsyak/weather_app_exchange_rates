import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ExchangeRatesHeader } from '../../blocks';

import { HeaderSection, HeaderTitle } from './Header.styles';


const Header = () => {

  // let data = new Date(1648414800*1000);
  // let day = data.getDay();

  // console.log(day)

  // const testClick = () => {
  //   let test = '2022-03-27 18:00:00'.slice(11);
  //   let test2 = '2022-03-27 18:00:00'.slice(0, 10);
  //   console.log(test)
  //   console.log(test2)
  // }

  const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city);
  const country = useSelector((state) => state.fiveDaysWeather.country)
   
  return(
    <HeaderSection>
      <HeaderTitle>
        City: { city || '--' }, { country }
      </HeaderTitle>
      {/* <button onClick={ testClick }>On</button> */}
      <ExchangeRatesHeader />
    </HeaderSection>
  )
}

export default memo(Header);