import { useEffect, useState } from 'react';
import { WeatherCard, ChooseCity } from '../../blocks';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from '../../features/getUserLocationWeather/getUserLocationWeather';
import { setDailyWeatherData } from '../../features/setDailyWeather/setDailyWeather';

import { WeatherSection, WheaterInfoWrapper, CityName } from './Weather.styles';

const Weather = () => {

  const [cityName, setCityName] = useState('--');

  const currentLocation = useSelector((state) => state.locationData)
  const dailyWeatherData = useSelector((state) => state.dailyWeatherData)
  const dispatch = useDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const coords = {latitude: latitude, longitude: longitude}

        if(latitude && longitude) {

          dispatch(getUserLocation(coords));
        }
      },

      function(error) {
        console.log(error)
      }
    )
  }, [])

  useEffect(() => {
    dispatch(setDailyWeatherData(currentLocation.locationWeather))
    setCityName(dailyWeatherData.dailyWeatherData.name)
  }, [currentLocation.locationWeather, dailyWeatherData.dailyWeatherData.name])

 


  return (
    <WeatherSection>
      <WheaterInfoWrapper>
        <CityName>{ cityName }</CityName>
        <WeatherCard />
      </WheaterInfoWrapper>
      <ChooseCity />
    </WeatherSection>
  )
}

export default Weather;