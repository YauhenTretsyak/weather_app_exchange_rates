import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRates, getExchangeRates } from '../../features/getExhangeRates/getExhangeRates'

import { v4 as uuidv4 } from 'uuid';
import { ExchangeRatesItem } from '..';

import styled from 'styled-components';

const ExchangeRatesHeaderWrapper = styled.div`
  width: 100%;
  max-width: 18.5rem;
`

const ExchangeRatesHeader = () => {

  const currency = useSelector((state) => state.ratesData);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getExchangeRates())
  }, [])
  
  const currencyExchange = currency.rates.map(item => {
    return(
      <ExchangeRatesItem 
        key={ uuidv4() }
        rate={ item.rate }
        value={ item.value }
      />
    )
  })

  return(
    <ExchangeRatesHeaderWrapper>
      { currencyExchange }
    </ExchangeRatesHeaderWrapper>
  )
}

export default ExchangeRatesHeader;

