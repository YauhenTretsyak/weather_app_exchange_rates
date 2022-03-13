import { useContext, memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/testReducer/testReducer';
import { LocationContext } from '../../context/locationService';
import { ExchangeRatesHeader } from '../../blocks';

import { HeaderSection, HeaderTitle } from './Header.styles';


const Header = () => {

  const testing = useSelector((state) => state.testing.value);
  const dispatch = useDispatch()
   

  useMemo(() => {
    console.log(testing)
  }, [testing])

  const { locationWeather } = useContext(LocationContext);

  const city = locationWeather.city

  return(
    <HeaderSection>
      <HeaderTitle>
        City: { city || '--' }
      </HeaderTitle>
      <ExchangeRatesHeader />

      <button onClick={ () => {dispatch(increment('ok'))} }>
        click to up
      </button>
      <button onClick={ () => {dispatch(decrement())} }>
        click to down
      </button>
    </HeaderSection>
  )
}

export default memo(Header);