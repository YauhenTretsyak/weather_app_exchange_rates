import styled from 'styled-components'

const Currency = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  font-size: 2.1rem;
  color: ${({theme}) => theme.colors.white};

  &:last-child {
    margin-bottom: 0;
  }
`
const CurrencyInfoWrapperLeft = styled.p`
  display: flex;
  width: 100%;
  max-width: 5.5rem;
  color: ${({theme}) => theme.colors.white};
`

const CurrencyInfoWrapperRight = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 11rem;
  color: ${({theme}) => theme.colors.white};
`

const Flag = styled.span`
  display: block;
  position: relative;

  &:before {
    content: '${props => props.content}';
    position: absolute;
    top: 50%;
    left: ${props => props.secondary ? '-5.6rem' : '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.3rem;
    height: 3.6rem;
    border-radius: .4rem;
    background-image: url(${props => props.flag});
    background-size: cover;
    box-shadow: inset 0 0 .4rem .2rem ${({theme}) => theme.colors.gold};
    text-shadow: .3rem .3rem .2rem #000;
    transform: translateY(-50%);
  }
`

export {
    Currency,
    CurrencyInfoWrapperLeft,
    CurrencyInfoWrapperRight,
    Flag
}