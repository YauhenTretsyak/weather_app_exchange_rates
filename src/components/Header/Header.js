import { memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/testReducer/testReducer';
import { ExchangeRatesHeader } from '../../blocks';

import { HeaderSection, HeaderTitle } from './Header.styles';


const Header = () => {

  const testing = useSelector((state) => state.testing.value);
  const dispatch = useDispatch()
  const city = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city);
   

  useMemo(() => {
    console.log(testing)
  }, [testing])


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