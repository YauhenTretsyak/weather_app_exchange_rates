import styled from 'styled-components';
import screen_breakpoint from './screen_breakpoints';

const SectionContainer = styled.div`
  margin: 3rem 1.5rem;
  position: relative;
  min-height: .1rem;
  box-sizing: border-box;
  padding: 2rem 2.7rem;
  /* background: linear-gradient(#f4eed5 24%, #d1e8ea6b 100%); */
  background: linear-gradient(#0083ff 24%, #0009 100%);
  box-shadow: inset 0 .3rem 1rem .1rem #00000059;
  border-radius: 1.1rem;

  ${screen_breakpoint.sm} {
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 3rem;
    max-width: 54rem;
  }

  ${screen_breakpoint.md}{
    padding: 2rem 4rem;
    max-width: 76.8rem;
  }

  ${screen_breakpoint.xl}{
    max-width: 110.4rem;
  }

  ${screen_breakpoint.xxl}{
    max-width: 128rem;
  }
`;

export default SectionContainer;