import { LocationContext } from '../../context/locationService';
import { useState, useContext } from 'react';
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
    savedLocationsData,
    errorMessage,
    ToCloseErrorMenu,
    ToDisplayZipCodeErrorMenu
  } = useContext(LocationContext);

  const [cityName, setCityName] = useState('')
  const [zipData, setZipData] = useState('')
  const [isOnSaveOption, setIsOnSaveOption] = useState(true);


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
    GetUserSearchLocation(cityName);
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

      GetUserSearchFromZipCode(zipObj)
      setZipData('')
      setSaveBtnActive()
    } else {
      ToDisplayZipCodeErrorMenu()
    }
  }

  const ToSaveSearch = () => {
    ToSaveUsersLocations({
      id: uuidv4(),
      cityName: locationWeather.city
    })

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

// const pattern = /[0-9]+,\s*[a-z]+/gmi,
// 	str = '00046,us';
// console.log(pattern.test(str));

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