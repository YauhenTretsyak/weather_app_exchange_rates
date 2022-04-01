import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeErrorLocation } from "../../features/getUserLocationWeather/getUserLocationWeather";

import styled from 'styled-components';
import { FlexContainer } from "../../styles/StyledElements";

const BanMenuWrapper = styled(FlexContainer)`
  position: absolute;
  display: ${props => props.isError ? 'flex' : 'none'};
  top: 3rem;
  left: 50%;
  padding: 2.5rem;
  width: 100%;
  max-width: 30rem;
  height: 20rem;
  border-radius: 2.1rem;
  background: linear-gradient(#0083ff 24%, #000000c2 100%);
  box-shadow: inset 0 .3rem 1rem .1rem #000000c7;
  z-index: 100;
  transform: translateX(-50%);
`

const CloseBtn = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: red;

  &:hover {
    cursor: pointer;
  }
`

const MenuContent = styled.p`
  text-align: center;
  font-weight: 300;
  color: #fff400;
  text-shadow:  .2rem .3rem .1rem #000;
`

const BanLocalizationMenu = () => {

  const [isError, setIsError] = useState(false);  
  const isBanned = useSelector((state) => state.locationData.error);

  const dispatch = useDispatch();

  const ToCloseErrorMenu = () => {
    dispatch(removeErrorLocation());
  }

  useEffect(() => {
    if(isBanned) {
      setIsError(true);
    } else {
      setIsError(false)
    }
  }, [isBanned])

  return(
    <BanMenuWrapper isError={ isError }>
      <CloseBtn
        onClick={ ToCloseErrorMenu }
      >X</CloseBtn>
      <MenuContent>
        To correctly display the weather of your localization, please allow the browser to access your localization data.
      </MenuContent>
    </BanMenuWrapper>
  )
}

export default BanLocalizationMenu;