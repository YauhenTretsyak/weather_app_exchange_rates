import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { weather_icons } from '../../dataComponents/icons';

import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import iconCold from '../../assets/icons/temp_cold.png';
import iconWarm from '../../assets/icons/temp_warm.png';
import iconWind from '../../assets/icons/wind.png';
import { ImageContainer } from '../../styles/StyledElements';

const LongTimeWeatherItemWrapper = styled.div`
  position: relative;
  margin-bottom: .7rem;
  width: 80%;
  padding-left: 3rem;
  padding-bottom: .7rem;
  border-bottom: .1rem solid #00fff3;

  ${ screen_breakpoints.xs_spec } {
    padding-left: 0;
    width: auto;
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: .7rem;
    border-bottom: 0;

    ${ screen_breakpoints.xs_spec } {
      margin-bottom: .7rem;
      padding-bottom: .7rem;
      border-bottom: .1rem solid #00fff3;
    }
  }
`

const IconWrapper = styled(ImageContainer)`
  position: absolute;
  top: -.2rem;
  left: -.3rem;
  width: 3rem;
  height: 3rem;

  ${ screen_breakpoints.xs_spec } {
    position: relative;
    top: unset;
    left: unset;
  }
`

const DayNameInfo = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff85a;
  text-shadow: .3rem .3rem .4rem #000;

  ${ screen_breakpoints.sm } {
    font-size: 2.2rem;
  }
`

const DayDate = styled.span`
  margin-left: .6rem;
  color: #fff4f4;
  font-size: 1.6rem;
  font-weight: 300;
`
//warm color #ff8100
const WindSpedInfo = styled.p`
  position: relative;
  padding-left: 1.7rem;
  font-size: 1.5rem;

  ${ screen_breakpoints.sm } {
    padding-left: 2.4rem;
    font-size: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -.5rem;
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${ iconWind });
    background-size: cover;
    transform: translateY(-50%);

    ${ screen_breakpoints.sm } {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`

const TempInfo = styled.p`
  position: relative;
  padding-left: 1.2rem;
  font-size: 1.6rem;
  color: ${ props => props.isCold ? '#93ffe1' : '#ff8100'} !important;

  ${ screen_breakpoints.sm } {
    padding-left: 2.4rem;
    font-size: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1.6rem;
    background-image: url(${ props => props.isCold ? iconCold : iconWarm});
    background-size: cover;

    ${ screen_breakpoints.sm } {
      width: 1.6rem;
      height: 2.7rem;
    }
  }
`

const LongTimeWeatherItem = (props) => {

  const { dt, dateTxt, windSpeed, temperature, icon } = props;
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


  const filteredIcon = weather_icons.filter(item => item.id === icon )

  const iconTopage = filteredIcon.map(item => {
    return(
      <IconWrapper
        key={ uuidv4() }
      >
        <img src={ item.icon } alt='weather' />
      </IconWrapper>
    )
  })

  return(
    <LongTimeWeatherItemWrapper>
      { iconTopage }
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