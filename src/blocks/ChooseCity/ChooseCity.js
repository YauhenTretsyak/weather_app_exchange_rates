import { LocationContext } from '../../context/locationService';
import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDailyWeatherData } from '../../features/setDailyWeather/setDailyWeather';
import { setUserSearch } from '../../features/setUserSearch/setUserSearch';
import { setZipSearch } from '../../features/setZipSearch/setZipSearch';
import { saveCity } from '../../features/saveCurrentCity/saveCurrentCity';
import { v4 as uuidv4 } from 'uuid';
import { SavedLocations, ErrorMenu } from '..';

import {
  ChooseCityWrapper,
  SearchWrapper,
  InputBox,
  Input,
  SearchBtn,
  SaveBtnContainer,
  SaveBtn,
  SavedLocationWrapper,
  SavedLocationTitle
} from './ChooseCity.styles';


const ChooseCity = () => {
  const { 
    GetUserSearchLocation, 
    GetUserSearchFromZipCode, 
    ToSaveUsersLocations, 
    locationWeather,
    // savedLocationsData,
    errorMessage,
    ToCloseErrorMenu,
    ToDisplayZipCodeErrorMenu
  } = useContext(LocationContext);

  const getNewWeatherData = useSelector((state) => state.searchCityWeather.newLocationWeather)
  const getZipWeatherData = useSelector((state) => state.searchZipWeather.newZipLocation)
  const savedLocationsData = useSelector((state) => state.saveCurrentCity.savedLocationsData)
  const actuallyCityName = useSelector((state) => state.dailyWeatherData.dailyWeatherData.city)
  const dispatch = useDispatch();

 
  const [cityName, setCityName] = useState('')
  const [zipData, setZipData] = useState('')
  const [isOnSaveOption, setIsOnSaveOption] = useState(true);


  useEffect(() => {
    if(getNewWeatherData.name) {
      dispatch(setDailyWeatherData(getNewWeatherData))
    }
  }, [getNewWeatherData])

  useEffect(() => {
    if(getZipWeatherData.name) {
      dispatch(setDailyWeatherData(getZipWeatherData))
    }
  }, [getZipWeatherData])


  const setSaveBtnActive = () => {
    setIsOnSaveOption(true)
  }

  const getCityName = (e) => {
    const city = e.target.value;
    setCityName(city)
  }

  const getZipData = (e) => {
    const zipDataValue = e.target.value;
    e.target.value = zipData;
    setZipData(zipDataValue);
  }

  const ToSearchCityName = () => {
    dispatch(setUserSearch(cityName)) 
    setCityName('') 
    setSaveBtnActive()
  }
  
  const ToSearchZipCode = () => {
    const pattern = /[0-9]+,\s*[a-z]+/gmi,
      str = zipData;
    
    if(pattern.test(str)) {
      console.log(pattern.test(zipData));
      const zipArr = zipData.split(',');
      const zipNumber = +zipArr[0].trim();
      const countryCode = zipArr[1].trim();
      
      const zipObj = {
        zipNumber: zipNumber,
        countryCode: countryCode 
      }

      dispatch(setZipSearch(zipObj))
      setZipData('')
      setSaveBtnActive()
    } else {
      ToDisplayZipCodeErrorMenu()
    }
  }

  //## Save to LocalStorage
// useEffect(() => {
//   const newLocations = JSON.parse(window.localStorage.getItem('SavedWeatherLocation')) || [];
//   const savedAllLocations = savedLocationsData;
//   const locationToPage = newLocations.concat(savedAllLocations);
//   // setSavedLocations(locationToPage)
//   console.log(newLocations, savedAllLocations)
//   dispatch(saveCity(locationToPage))
// },[])


// useEffect(() => {
//   window.localStorage.setItem('SavedWeatherLocation', JSON.stringify(savedLocationsData));
// }, [savedLocationsData])
//######

  const ToSaveSearch = () => {
    dispatch(saveCity({
      id: uuidv4(),
      cityName: actuallyCityName
    }))

    setIsOnSaveOption(false)
  }

  const usersLocationsList = <SavedLocationWrapper>
          <SavedLocationTitle>Saved locations:</SavedLocationTitle>
          {
            savedLocationsData.map(item => {
              // locationToPage.map(item => {
              return(
                <SavedLocations 
                  key={ item.id }
                  id={ item.id }
                  cityName={ item.cityName }
                  setSaveBtnActive={ setSaveBtnActive }
                />
              )
            })
          }
        </SavedLocationWrapper>


  return(
    <ChooseCityWrapper>
      <ErrorMenu 
        isError={ errorMessage.isError } 
        error_message={ errorMessage.error_message }
        ToCloseErrorMenu={ ToCloseErrorMenu }
      /> 
      <SearchWrapper>
        <InputBox 
          text_example='example: Warsaw'
        >
          <Input 
            onChange={ getCityName }
            value={ cityName } 
            placeholder='City'
          />
        </InputBox>
        <SearchBtn
          onClick={ ToSearchCityName }
        >
          Search
        </SearchBtn>
      </SearchWrapper>
      <SearchWrapper>
        <InputBox 
          text_example='example: 94040,us'>
          <Input 
            onChange={ getZipData }
            value={ zipData }
            placeholder="City's zip-code"
          />
        </InputBox>
        <SearchBtn
          onClick={ ToSearchZipCode }
        >
          Search
        </SearchBtn>
      </SearchWrapper>
      <SaveBtnContainer>
        <SaveBtn 
          isOnSaveOption={ isOnSaveOption }
          onClick={ isOnSaveOption ? ToSaveSearch : null }
        >
          Save city
        </SaveBtn>
      </SaveBtnContainer>
      { savedLocationsData.length > 0 ? usersLocationsList : null }
    </ChooseCityWrapper>
  )
}

export default ChooseCity