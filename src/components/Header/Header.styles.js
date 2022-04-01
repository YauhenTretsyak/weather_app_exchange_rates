import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/StyledElements';
import ScrollIntoView from 'react-scroll-into-view';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import searchLupa from '../../assets/icons/search_lupa.png';

const HeaderSection = styled(SectionContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${ screen_breakpoints.xss } {
    justify-content: space-between;
  }
`
const HeaderTitle = styled(SectionTitle)`
  position: relative;
  margin-bottom: 2rem;
  margin-right: 1rem;
  width: 100%;

  ${ screen_breakpoints.xss } {
    width: fit-content;
  }
`

const SearchButton = styled(ScrollIntoView)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  ${ screen_breakpoints.xss } {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 54%;
    right: 0;
    width: 1.6rem;
    height: 1.6rem;
    background-image: url(${ searchLupa });
    background-size: cover;
    transform: translateY(-50%);
  }

  &:hover {
    cursor: pointer;
  }
`

const Button = styled.a`
  font-weight: 400;
  font-size: 1.6rem;
  padding-right: 2rem;
  color: #fff85a;
  text-shadow: .1rem .2rem .3rem black;
`

export { HeaderSection, HeaderTitle, SearchButton, Button }