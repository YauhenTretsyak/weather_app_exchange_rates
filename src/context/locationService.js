import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const apiUrl = 'https://api.openweathermap.org/'
  const apiKey = '9980f38164f1b2cf7d9081d38f49a7fe';
  const [locationSwitchData, setLocationSwitchData] = useState({city: ''})
  const [locationWeather, setLocationWeather] = useState({temperature: ''});
  const [savedLocationsData, setSavedLocations] = useState([]);
  const [errorMessage, setErrorMesage] = useState({isError: false, error_message: ''});

//## start location
  const GetStartLocation = async (latitudeData, longitudeData) => {
    await axios.get(`${ apiUrl }geo/1.0/reverse?lat=${latitudeData}&lon=${longitudeData}&limit=5&appid=${apiKey}`)
    .then(res => {
      // console.log(res.data[0])
      LocationSwitcher(res.data[0])
    });
  }
//##

//## users's search location
    const GetUserSearchLocation = async (cityName) => {
      await axios.get(`${ apiUrl }/data/2.5/weather?q=${ cityName }&appid=${apiKey}`)
      .then(res => {
        LocationSwitcher(res.data)
      })
      .catch(function (error) {
        setErrorMesage({isError: true, error_message: 'city name'});
      });
    }
//##

//## users's search location from zipCode

  const ToDisplayZipCodeErrorMenu = () => {
    setErrorMesage({isError: true, error_message: 'zip code'});
  }

  const GetUserSearchFromZipCode = async ({ zipNumber, countryCode }) => {
    
    await axios.get(`${ apiUrl }data/2.5/weather?zip=${zipNumber},${countryCode}&appid=${apiKey}`)
    .then(res => {
      LocationSwitcher(res.data)
    })
    .catch(function (error) {
      ToDisplayZipCodeErrorMenu();
    });;
  }
//##

const ToCloseErrorMenu = () => {
  setErrorMesage({isError: false, error_message: '0'});
}



//## Save to LocalStorage
useEffect(() => {
  const newLocations = JSON.parse(window.localStorage.getItem('SavedWeatherLocation')) || [];
  const savedAllLocations = savedLocationsData;
  const locationToPage = newLocations.concat(savedAllLocations);
  setSavedLocations(locationToPage)
},[])


useEffect(() => {
  window.localStorage.setItem('SavedWeatherLocation', JSON.stringify(savedLocationsData));
}, [savedLocationsData])
//######
  

 //## Saving user's locations
  const ToSaveUsersLocations = ({id, cityName}) => {
    setSavedLocations(
      [ 
        ...savedLocationsData, 
        {
          id: id,
          cityName: cityName
        }
      ]
    )
  }
//##

  //## Removing user's saving locations
  const ToRemoveSavedLocations = (newSavedData) => {
    setSavedLocations(newSavedData)
    window.localStorage.setItem('SavedWeatherLocation', JSON.stringify(newSavedData));
  }
  //##


  const GetWeatherData = () => {
    const city = locationSwitchData.city || 'Warsaw';
    const country = locationSwitchData.country || 'pl';

    // axios.get(`${ apiUrl }data/2.5/weather?q=${ city },${ country }&APPID=${apiKey}`)
    axios.get(`${ apiUrl }data/2.5/weather?q=${ city }&appid=${apiKey}`)
    .then(res => {
      GetLocationWeather(res.data)
    });
  }

  const LocationSwitcher = (newLocation) => {

    setLocationSwitchData(
      {
        city: newLocation.name,
        // country: newLocation.country,
        city_pl: '',
        // city_pl: 'Warszwa',
      }
    )
  }

  const GetLocationWeather = (locationWeather) => {
    
    setLocationWeather(
      {
        temperature: locationWeather.main.temp,
        pressure: locationWeather.main.pressure,
        windSpeed: locationWeather.wind.speed,
        icon: locationWeather.weather[0].icon,
        city: locationWeather.name
      }
    )
  }

  useEffect(() => {
    GetWeatherData()
  }, [locationSwitchData.city])

  return (
    <LocationContext.Provider value={{ 
      locationSwitchData, 
      LocationSwitcher, 
      locationWeather, 
      GetLocationWeather,
      GetStartLocation, 
      GetWeatherData,
      GetUserSearchLocation,
      GetUserSearchFromZipCode,
      ToSaveUsersLocations,
      savedLocationsData,
      ToRemoveSavedLocations,
      errorMessage,
      ToCloseErrorMenu,
      ToDisplayZipCodeErrorMenu,
    }}>
      { props.children }
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;

// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}   city
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key} zip