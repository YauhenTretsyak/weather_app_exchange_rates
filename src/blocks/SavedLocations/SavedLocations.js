import {useDispatch, useSelector} from 'react-redux'
import {SavedLocationsWrapper, SavedCity, Description, RemoveBtn} from './SavedLocations.styles'
import {removeCity} from '../../features/saveCurrentCity/saveCurrentCity'
import {setUserSearch} from '../../features/setUserSearch/setUserSearch'


const SavedLocations = (props) => {
    const {id, cityName, setSaveBtnActive} = props
    const dispatch = useDispatch()
    const {savedLocationsData} = useSelector((state) => state.saveCurrentCity)

    const ToShowHandler = () => {
        const CardData = savedLocationsData.filter((item) => item.id === id)
    
        dispatch(setUserSearch(CardData[0].cityName))
    }

    const ToRemoveHandler = () => {
        const NewCardData = savedLocationsData.filter((item) => item.id !== id)
        dispatch(removeCity(NewCardData))
        window.localStorage.setItem('SavedWeatherLocation', JSON.stringify(NewCardData))
        setSaveBtnActive()
    }

    return (
        <SavedLocationsWrapper
            onClick={ ToShowHandler }
            data-id={ id }
            as="div"
        >
            <SavedCity>
                { cityName }
            </SavedCity>
            <Description>
        Click to show weahter in 
                <span>{ cityName }</span>
            </Description>
            <RemoveBtn onClick={ ToRemoveHandler }>
        X
            </RemoveBtn>
        </SavedLocationsWrapper>
    )
}

export default SavedLocations