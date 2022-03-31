import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { LongTimeWeatherItem } from "../../blocks";

import styled from 'styled-components';
import { SectionContainer, FlexContainer, SectionTitle } from '../../styles/StyledElements/'
import screen_breakpoints from "../../styles/StyledElements/screen_breakpoints";

const LongTimeWeatherSection = styled(SectionContainer)``
const Title = styled(SectionTitle)`
  margin-bottom: 0;
`

const WeatherWrapper = styled(FlexContainer)`
  justify-content: space-around;

  ${ screen_breakpoints.xs_spec } {
    flex-wrap: wrap;
  }
`

const DayWeather = styled(FlexContainer)`
  position: relative;
  flex-direction: column;
  margin-top: 3rem;
  width: 100%;
  max-width: 45%;
  padding: 1rem;
  border-radius: 1rem;
  background: #fae7957d;
  box-shadow: inset 0 0 .8rem .3rem ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.white};

  ${ screen_breakpoints.xs_spec } {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }

  ${ screen_breakpoints.xl } {
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 49%;
  }

  &::before {
    content: 'Daytime weather';
    position: absolute;
    top: -2.4rem;
    left: 0.4rem;
    font-size: 1.7rem;
    color: #ff9900ed;
    text-shadow: .1rem .1rem .1rem black;

    ${ screen_breakpoints.sm } {
      top: -2.4rem;
      left: 2.4rem;
      font-size: 2rem;
    }
  }

  & p {
    color: #00c4ff;
    text-shadow: .1rem .1rem .2rem #000;
  }
`
const NightWeather = styled(DayWeather)`
  background: #320c3e6b;

  &::before {
    content: 'Weather at night';
    color: #00fff3;
  }

  & p {
    color: #fff85a;
    text-shadow: .3rem .3rem .4rem #000;
  }
`

const LongTimeWeather = () => {
  const dayData = useSelector((state) => state.fiveDaysWeather.fiveDaysWeatherData.day);
  const nightData = useSelector((state) => state.fiveDaysWeather.fiveDaysWeatherData.night);

  const [night, setNight] = useState(null);
  const [day, setDay] = useState(null)

  const setLongTimeWeather = (daysData) => {
   const weatherRenderData = daysData.length > 0 ? daysData.map(item => {

      return(
        <LongTimeWeatherItem 
          key={ uuidv4() }
          dt={ item.dt }
          dateTxt={ item.dt_txt }
          windSpeed={ item.wind.speed }
          temperature={ item.main.temp }
          pressure={ item.main.pressure }
          icon={ item.weather[0].icon }
        />
      )
    }) : null

    return weatherRenderData
  }

  useEffect(() => {
    setNight(setLongTimeWeather(nightData))
    setDay(setLongTimeWeather(dayData))
    
  }, [nightData, dayData])


  const longTimeWeatherSection = dayData.length > 0 ? 
                                          <LongTimeWeatherSection>
                                            <Title>
                                             5 days weather
                                            </Title>
                                              <WeatherWrapper>
                                                <DayWeather>
                                                  { day }
                                                </DayWeather>
                                                <NightWeather>
                                                  { night }
                                                </NightWeather>
                                              </WeatherWrapper>
                                            </LongTimeWeatherSection>
                                            :
                                            null

  return(
    <>
      { longTimeWeatherSection }
    </>
  )
}

export default LongTimeWeather;