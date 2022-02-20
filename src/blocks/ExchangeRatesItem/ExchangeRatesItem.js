import flagsData from '../../dataComponents/flagsData';
import flag_secondary from '../../assets/flags/PL.png';

import {
  Currency,
  CurrencyInfoWrapperLeft,
  CurrencyInfoWrapperRight,
  Flag
} from './ExchangeRatesItem.styles';


const ExchangeRatesItem = (props) => {

  const { rate, value } = props;

  const flag = flagsData.filter(item => {return item.id === rate})

  const currencyFlags = flag.map(item => {
    return(
      item.flag
    )
  })

  return(
    <Currency >
      <CurrencyInfoWrapperLeft>
        <Flag content={ `1 ${ rate }` } flag={ currencyFlags[0] } >
      </Flag> 
      </CurrencyInfoWrapperLeft>
        = 
      <CurrencyInfoWrapperRight>
        { value } 
        <Flag 
          content={ 'PLN' } 
          flag={ flag_secondary }
          secondary
        />
      </CurrencyInfoWrapperRight>
    </Currency>
  )
}

export default ExchangeRatesItem;