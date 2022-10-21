import styled from 'styled-components'
import {SectionTitle, FlexContainer} from '../../styles/StyledElements'

const LoadingSpinnerWrapper = styled(FlexContainer)``
const Title = styled(SectionTitle)`
    margin-bottom: 0;
    font-size: ${({titleSize}) => titleSize ? `${titleSize }rem` : '4.3rem'};
`

export {LoadingSpinnerWrapper, Title}
