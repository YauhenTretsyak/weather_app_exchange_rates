import styled from 'styled-components';

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
`

const ErrorMenu = (props) => {
  const { isError, error_message, ToCloseErrorMenu } = props;

  return(
    <ErrorMenuWrapper isError={ isError }>
      <ErrorInfo>
      Please write correctly { error_message }
      </ErrorInfo>
      <CloseBtn
        onClick={ ToCloseErrorMenu }
      >X</CloseBtn>
    </ErrorMenuWrapper>
    )
}

export default ErrorMenu;