import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import {weather_icons} from '../../dataComponents/icons'

import {
    WeatherCardWrapper,
    WeatherIcon,
    WeatherInfoWrapper,
    TempInfo,
    PressureInfo,
    WindSpeedInfo,
    ToggleBtn
} from './WeatherCard.styles'


const WeatherCard = () => {

    const dailyWeather = useSelector((state) => state.dailyWeatherData.dailyWeatherData)
    const {temperature, pressure, windSpeed, icon} = dailyWeather
    const [temp, getTemp] = useState(temperature)
    const tempCelsius = temperature-273

    const weatherIcon = weather_icons.filter(item => item.id === icon)

    const mathFloorFunc = (item) => (
        Math.floor((item) * 10) / 10
    )


    const GetCelsiusFormat = () => {
        getTemp(`${ mathFloorFunc(temperature - 273) } °C`)
    }

    const GetKelvinFormat = () => {
        getTemp(`${ mathFloorFunc(temperature) } K`)
    }

    const [toggleBtnData, setToggleBtnData] = useState({title: 'Kelvin', funcBtn: GetKelvinFormat, isOnKelvin: false})

    const [isTempPositive, setIsTemPositive] = useState(true)
    const [windSpeedKm, setWindSpeedKm] = useState(0)

    const ToggleBtnFunc = () => {
        if (toggleBtnData.isOnKelvin) {
            setToggleBtnData({title: 'Kelvin', funcBtn: GetCelsiusFormat, isOnKelvin: false})
            GetCelsiusFormat()
        } else {
            setToggleBtnData({title: 'Celsius', funcBtn: GetKelvinFormat, isOnKelvin: true})
            GetKelvinFormat()
        }
    }

    useEffect(() => {
        if (tempCelsius > 0) {
            setIsTemPositive(true) 
        } else {
            setIsTemPositive(false)
        }

        // setWindSpeedKm(mathFloorFunc(windSpeed * 3.6)); // km/h
        setWindSpeedKm(windSpeed)

    }, [tempCelsius, windSpeed])

    useEffect(() => {
        getTemp(`${ mathFloorFunc(temperature - 273) } °C`) 
    }, [temperature])


    const todayIconWeather = weatherIcon.map(item => (
        <img 
            key={ uuidv4() }
            src={ item.icon } 
            alt="weather_icon"
        />
    ))

    return (
        <WeatherCardWrapper>
            <WeatherIcon>
                { todayIconWeather }
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
          Wind speed: <span>{ windSpeedKm } m/s</span>
                </WindSpeedInfo>

                <ToggleBtn  
                    onClick={ ToggleBtnFunc }
                >
         Change to: <span>{ toggleBtnData.title }</span>
                </ToggleBtn>

            </WeatherInfoWrapper>
        </WeatherCardWrapper>
    )
}

export default WeatherCard