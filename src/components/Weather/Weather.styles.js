import styled from 'styled-components'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { SectionContainer } from '../../styles/StyledElements/'

const WeatherSection = styled(SectionContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 4rem;

  ${ screen_breakpoints.xl } {
    justify-content: space-between;
    padding-bottom: 7.8rem;
  }
`
const WheaterInfoWrapper = styled.div`
  width: 100%;
  ${ screen_breakpoints.md } {
    max-width: 63rem;
  }

  ${ screen_breakpoints.xl } {
    max-width: 52rem;
  }
`

const CityName = styled.p``

export { WeatherSection, WheaterInfoWrapper, CityName }