import { useContext, memo } from 'react';
import { LocationContext } from '../../context/locationService';
import { ExchangeRates } from '../../blocks';

import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/StyledElements';

const HeaderSection = styled(SectionContainer)`
  display: flex;
  align-items: center;
`
const HeaderTitle = styled(SectionTitle)`
  margin-bottom: 0;
`

const Header = () => {

  const { locationWeather } = useContext(LocationContext);

  const city = locationWeather.city

  return(
    <HeaderSection>
      <HeaderTitle>
        City: { city || '--' }
      </HeaderTitle>
      <ExchangeRates />
    </HeaderSection>
  )
}

export default memo(Header);