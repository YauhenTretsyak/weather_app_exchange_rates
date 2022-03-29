import { useEffect, useState } from 'react';

import styled from 'styled-components'
import iconCold from '../../assets/icons/temp_cold.png';
import iconWarm from '../../assets/icons/temp_warm.png';
import iconWind from '../../assets/icons/wind.png';

const LongTimeWeatherItemWrapper = styled.div``

const DayNameInfo = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #fff85a;
  text-shadow: .3rem .3rem .4rem #000;
`

const DayDate = styled.span`
  margin-left: .6rem;
  color: #fff4f4;
  font-size: 1.5rem;
  font-weight: 300;
`
//warm color #ff8100
const WindSpedInfo = styled.p`
  position: relative;
  padding-left: 2.4rem;
  font-size: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url(${ iconWind });
    background-size: cover;
    transform: translateY(-50%);
  }
`

const TempInfo = styled.p`
  position: relative;
  padding-left: 2.4rem;
  font-size: 2rem;
  color: ${ props => props.isCold ? '#93ffe1' : '#ff8100'} !important;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.6rem;
    height: 2.7rem;
    background-image: url(${ props => props.isCold ? iconCold : iconWarm});
    background-size: cover;
  }
`

const LongTimeWeatherItem = (props) => {

  const { dt, dateTxt, windSpeed, temperature } = props;
  const [isCold, setIsCold] = useState(false);
  let dayName = '--';

  let data = new Date(`${ dt }`*1000);
  let day = data.getDay();
  const dayDate = dateTxt.slice(5,10).replace('-','.');

  const mathFloorFunc = (item) => {
    return(
      Math.floor((item) * 10) / 10
    )
  }

  const temp = mathFloorFunc(temperature - 273);
  const wind = mathFloorFunc(windSpeed);
  
  useEffect(() => {
    if(temp <= 0) {
      setIsCold(true)
    } else {
      setIsCold(false)
    }
  }, [temp])

  
  switch(day) {
    case 0: dayName = 'Sun' 
      break
    case 1: dayName = 'Mon' 
      break
    case 2: dayName = 'Tue' 
      break
    case 3: dayName = 'Wed' 
      break
    case 4: dayName = 'Thu' 
      break
    case 5: dayName = 'Fri' 
      break
    case 6: dayName = 'Sat' 
        break
      default: dayName = '--'
  }

  return(
    <LongTimeWeatherItemWrapper>
      <DayNameInfo>
        { dayName || '--' } 
        <DayDate>
          { dayDate }
        </DayDate>
      </DayNameInfo>
      <TempInfo isCold={ isCold }>
       {temp > 0 ? '+' : ''} { temp || '--' } °C
      </TempInfo>
      <WindSpedInfo>
        { wind || '--' } m/s
      </WindSpedInfo>
    </LongTimeWeatherItemWrapper>
  )
}

export default LongTimeWeatherItem;