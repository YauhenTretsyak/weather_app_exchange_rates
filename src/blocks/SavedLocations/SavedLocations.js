import { useContext } from 'react';
import { LocationContext } from '../../context/locationService'
import { SavedLocationsWrapper, SavedCity, Description, RemoveBtn } from './SavedLocations.styles'


const SavedLocations = (props) => {
  const { id, cityName, setSaveBtnActive } = props;
  const { savedLocationsData, GetUserSearchLocation, ToRemoveSavedLocations } = useContext(LocationContext);


  const ToShowHandler = () => {
    const CardData = savedLocationsData.filter((item) => {return item.id === id})
    
    GetUserSearchLocation(CardData[0].cityName)
  }

  const ToRemoveHandler = () => {
    const NewCardData = savedLocationsData.filter((item) => {return item.id !== id})
    ToRemoveSavedLocations(NewCardData)
    setSaveBtnActive()
  }

  return(
    <SavedLocationsWrapper
      onClick={ ToShowHandler }
      data-id={ id }
      as='div'
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

export default SavedLocations;