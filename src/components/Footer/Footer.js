import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { SectionContainer } from '../../styles/StyledElements';

const FooterSection = styled(SectionContainer)``

const Copyrights = styled.p`
  text-align: center;

  ${ screen_breakpoints.md } {
    text-align: left;
  }
`

const AuthorLink = styled.a`
  display: inline-block;
  padding-left: .9rem;
  text-decoration: none;
  font-family: 'Indie Flower', sans-serif;
  color: ${({theme}) => theme.colors.silver};
`

const Footer = () => {
  return(
    <FooterSection>
      <Copyrights>
        Designed & Developed by
        <AuthorLink 
          href='https://yauhentretsyak.github.io/portfolio/'
          target='_blank'
        >
          Yauhen Tretsyak
        </AuthorLink>
      </Copyrights>
    </FooterSection>
  )
}

export default Footer