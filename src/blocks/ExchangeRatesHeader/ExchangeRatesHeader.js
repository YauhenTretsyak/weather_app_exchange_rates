import { useMemo, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ExchangeRatesItem } from '..';

import styled from 'styled-components';

const ExchangeRatesHeaderWrapper = styled.div`
  width: 100%;
  max-width: 18.5rem;
`

const ExchangeRatesHeader = () => {

  const [currency, setCurrency] = useState([])

  const apiUrlCurrency = 'https://free.currconv.com';
  const apiKeyCurrency = '28d808b7165a042b6b12';


  const getCurrencyExchange = async (setCurrency) => {
    await axios.get(`${ apiUrlCurrency }/api/v7/convert?q=USD_PLN,EUR_PLN&compact=ultra&apiKey=${ apiKeyCurrency }`)
      .then(res => {
        const newCurrencyData = res.data;
        let currencyData = [];

        for (let key in newCurrencyData) {
        
          const newKey = key.slice(0, 3);
          const currencyObj = {}
          
          currencyObj['rate'] = newKey
          currencyObj['value'] = mathFloorFunc(newCurrencyData[key])
          
          currencyData = [
            ...currencyData,
            currencyObj
          ]
        }
        setCurrency(currencyData);
      })
  }

  const mathFloorFunc = (item) => {
    return(
      Math.floor((item) * 10000) / 10000
    )
  }

  useMemo(() => {
    getCurrencyExchange(setCurrency)
  }, [])

 
  const currencyExchange = currency.map(item => {
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

