import { useContext, memo } from 'react';
import { LocationContext } from '../../context/locationService';
import { ExchangeRatesHeader } from '../../blocks';

import { HeaderSection, HeaderTitle } from './Header.styles';


const Header = () => {

  const { locationWeather } = useContext(LocationContext);

  const city = locationWeather.city

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