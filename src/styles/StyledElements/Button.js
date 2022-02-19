import styled from 'styled-components';

const Button = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 1rem;
  font-size: 1.9rem;
  box-shadow: inset 0 0 .8rem .3rem ${({theme}) => theme.colors.white};
  transition: all .15s ease-in-out;

  &:hover {
    cursor: pointer;
    font-size: 2rem;
    box-shadow: inset 0 0 1.7rem .3rem ${({theme}) => theme.colors.white};
  }

  & > span {
    padding-left: .5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.orange};
  }
`

export default Button;