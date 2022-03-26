import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { dailyWeather } from '../../features/setDailyWeather/setDailyWeather';

import {
  WeatherCardWrapper,
  WeatherIcon,
  WeatherInfoWrapper,
  TempInfo,
  PressureInfo,
  WindSpeedInfo,
  ToggleBtn
} from './WeatherCard.styles';


const WeatherCard = () => {

  const dailyWeather = useSelector((state) => state.dailyWeatherData.dailyWeatherData)
  const { temperature, pressure, windSpeed, icon } = dailyWeather;
  const [temp, getTemp] = useState(temperature);
  const tempCelsius = temperature-273;

  const mathFloorFunc = (item) => {
    return(
      Math.floor((item) * 10) / 10
    )
  }


  const GetCelsiusFormat = () => {
    getTemp(`${ mathFloorFunc(temperature - 273) } °C`);
  }

  const GetKelvinFormat = () => {
    getTemp(`${ mathFloorFunc(temperature) } K`);
  }

  const [toggleBtnData, setToggleBtnData] = useState({title: 'Kelvin', funcBtn: GetKelvinFormat, isOnKelvin: false})

  const [isTempPositive, setIsTemPositive] = useState(true);
  const [windSpeedKm, setWindSpeedKm] = useState(0);

  const ToggleBtnFunc = () => {
    if(toggleBtnData.isOnKelvin) {
      setToggleBtnData({title: 'Kelvin', funcBtn: GetCelsiusFormat, isOnKelvin: false})
      GetCelsiusFormat()
    } else {
      setToggleBtnData({title: 'Celsius', funcBtn: GetKelvinFormat, isOnKelvin: true})
      GetKelvinFormat()
    }
  }

  useEffect(() => {
    if(tempCelsius > 0) {
      setIsTemPositive(true); 
    } else {
      setIsTemPositive(false);
    }

    setWindSpeedKm(mathFloorFunc(windSpeed * 3.6));

  }, [tempCelsius, windSpeed])

  useEffect(() => {
    getTemp(`${ mathFloorFunc(temperature - 273) } °C`); 
  }, [temperature])

  return(
    <WeatherCardWrapper>
      <WeatherIcon>
        <img src={`https://openweathermap.org/img/wn/${ icon || '10d' }@2x.png`} alt='weather_icon'/>
      </WeatherIcon>
      <WeatherInfoWrapper>
        <TempInfo 
          tempIndication={ isTempPositive }
        >
         Temperature: <span>
           { toggleBtnData.isOnKelvin ? '' : isTempPositive ? '+' : '' } 
           { temp }
           </span>
        </TempInfo>
        <PressureInfo>
          Pressure: <span>{ pressure } hPa</span>
        </PressureInfo>
        <WindSpeedInfo as={PressureInfo}>
          Wind speed: <span>{ windSpeedKm } km/h</span>
        </WindSpeedInfo>

        <ToggleBtn  
          onClick={ ToggleBtnFunc  }
        >
         Change to: <span>{ toggleBtnData.title }</span>
        </ToggleBtn>

      </WeatherInfoWrapper>
    </WeatherCardWrapper>
  )
}

export default WeatherCard;