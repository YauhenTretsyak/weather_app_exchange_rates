import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeErrorName} from '../../features/setUserSearch/setUserSearch'
import {removeErrorZip} from '../../features/setZipSearch/setZipSearch'
import styled from 'styled-components'

const ErrorMenuWrapper = styled.div`
  display: ${props => props.isError ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 30rem;
  height: 20rem;
  background: linear-gradient(#0083ff 24%, #0009 100%);
  box-shadow: inset 0 .3rem 1rem .1rem #00000059;
  z-index: 100;
`

const ErrorInfo = styled.p``
const CloseBtn = styled.p`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: red;

  &:hover {
    cursor: pointer;
  }
`

const ErrorMenu = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(false)  
    const errorCityName = useSelector((state) => state.searchCityWeather.error)
    const errorZipCode = useSelector((state) => state.searchZipWeather.error)
    const errorLocation = useSelector((state) => state.locationData.error)


    const dispatch = useDispatch()

    const ToCloseErrorMenu = () => {
        dispatch(removeErrorName())
        dispatch(removeErrorZip())
    }

    useEffect(() => {
        if (errorCityName) {
            setErrorMessage(' Please write correctly city\'s name')
            setIsError(true)
        } else if (errorZipCode) {
            setErrorMessage(' Please write correctly city\'s zipCode')
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [errorCityName, errorZipCode, errorLocation])

    return (
        <ErrorMenuWrapper isError={ isError }>
            <ErrorInfo>
                { errorMessage }
            </ErrorInfo>
            <CloseBtn
                onClick={ ToCloseErrorMenu }
            >X</CloseBtn>
        </ErrorMenuWrapper>
    )
}

export default ErrorMenu