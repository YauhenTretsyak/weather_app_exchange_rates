import { useEffect, useState } from 'react';
import { WeatherCard, ChooseCity } from '../../blocks';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation, addErrorLocation } from '../../features/getUserLocationWeather/getUserLocationWeather';
import { setDailyWeatherData } from '../../features/setDailyWeather/setDailyWeather';
import { getFiveDaysWeather } from '../../features/getFiveDaysWeather/getFiveDaysWeather';

import { WeatherSection, WheaterInfoWrapper, CityName } from './Weather.styles';

const Weather = () => {

  const [cityName, setCityName] = useState('--');

  const currentLocation = useSelector((state) => state.locationData)
  const dailyWeather = useSelector((state) => state.dailyWeatherData.dailyWeatherData)
 
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
        dispatch(addErrorLocation());
      }
    )
  }, [])

  useEffect(() => {
      dispatch(setDailyWeatherData(currentLocation.locationWeather))
  }, [currentLocation.locationWeather])

  useEffect(() => {
    setCityName(dailyWeather.city)
    if(dailyWeather.city && dailyWeather.city !== '--') {
      dispatch(getFiveDaysWeather(dailyWeather.city))
      // dispatch(setIsDataLoaded())
    }
  }, [dailyWeather.city])


  return (
    <WeatherSection id='search_section'>
      <WheaterInfoWrapper>
        <CityName>{ cityName }</CityName>
        <WeatherCard />
      </WheaterInfoWrapper>
      <ChooseCity />
    </WeatherSection>
  )
}

export default Weather;