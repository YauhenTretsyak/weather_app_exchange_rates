import styled from 'styled-components'
import screen_breakpoint from './screen_breakpoints'

const SectionTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 1px 2px 1px black;
  font-weight: ${({theme}) => theme.fontWeight.font_weightLight};
  color: ${({theme}) => theme.colors.gold};
  
  ${ screen_breakpoint.md } {
    font-size: 4.3rem;
    margin-bottom: 2rem;
  }

  & > span {
    text-shadow: .3rem .4rem .2rem ${({theme}) => theme.colors.black};
    color: #ea8f0a;
  }

`

export default SectionTitle;