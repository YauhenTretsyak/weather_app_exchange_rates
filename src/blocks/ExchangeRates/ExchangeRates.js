import axios from 'axios';
import { useMemo, useEffect, useState } from 'react';

import styled from 'styled-components';

const ExchangeRatesWrapper = styled.div``

const ExchangeRates = () => {

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
          
          currencyObj[newKey] = mathFloorFunc(newCurrencyData[key])
          
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

  // console.log(
  //   mathFloorFunc(45.098765)
  // )

  useMemo(() => {
    getCurrencyExchange(setCurrency)
  }, [])

  console.log(currency)

  return(
    <ExchangeRatesWrapper>

    </ExchangeRatesWrapper>
  )
}

export default ExchangeRates;

