import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/StyledElements';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';

const HeaderSection = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${ screen_breakpoints.xss } {
    justify-content: space-between;
  }
`
const HeaderTitle = styled(SectionTitle)`
  margin-bottom: 2rem;
  margin-right: 1rem;
  width: 100%;

  ${ screen_breakpoints.xss } {
    width: fit-content;
  }
`

export { HeaderSection, HeaderTitle }