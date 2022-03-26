import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ExchangeRatesHeader } from '../../blocks';

import { HeaderSection, HeaderTitle } from './Header.styles';


const Header = () => {

  const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city);
   
  return(
    <HeaderSection>
      <HeaderTitle>
        City: { city || '--' }
      </HeaderTitle>
      <ExchangeRatesHeader />
    </HeaderSection>
  )
}

export default memo(Header);