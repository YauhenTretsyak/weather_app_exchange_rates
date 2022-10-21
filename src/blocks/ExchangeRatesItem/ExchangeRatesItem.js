import {useState} from 'react'
import {useSelector} from 'react-redux'
import flagsData from '../../dataComponents/flagsData'
import flag_secondary from '../../assets/flags/PL.png'

import {
    Currency,
    CurrencyInfoWrapperLeft,
    CurrencyInfoWrapperRight,
    Flag
} from './ExchangeRatesItem.styles'


const ExchangeRatesItem = (props) => {

    const {rate, value} = props
    const [localCountry, setlocalCountry] = useState('PL')
    // const [flag, setFlag] = useState('');
    // const [secondaryFlag, setSecondaryFlag] = useState('')

    const country = useSelector((state) => state.fiveDaysWeather.country)
    const secondaryRate = 'PLN'

    // useEffect(() => {
    //   setlocalCountry(country)
    
    //   setSecondaryFlag(secondaryFlag)
    // }, [country])

    // console.log(localCountry)

    const flag = flagsData.filter(item => item.id === rate.slice(0, 2))
    const secondaryFlag = flagsData.filter(item => item.id === country || secondaryRate.slice(0, 2))
  

    const currencyFlags = flag.map(item => (
        item.flag
    ))

    return (
        <Currency >
            <CurrencyInfoWrapperLeft>
                <Flag content={ `1 ${ rate }` } flag={ currencyFlags[0] } /> 
            </CurrencyInfoWrapperLeft>
        = 
            <CurrencyInfoWrapperRight>
                { value } 
                <Flag 
                    content={ secondaryRate } 
                    flag={ secondaryFlag.length > 0 ? secondaryFlag[0].flag : '' }
                    secondary
                />
            </CurrencyInfoWrapperRight>
        </Currency>
    )
}

export default ExchangeRatesItem