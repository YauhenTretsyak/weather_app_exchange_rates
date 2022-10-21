import RingLoader from 'react-spinners/RingLoader'
import {LoadingSpinnerWrapper, Title} from './LoadingSpinner.styles'

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
}

const LoadingSpinner = ({loading, color, size, titleSize}) => (
    <LoadingSpinnerWrapper>
        <Title titleSize={titleSize}>Loading...</Title>
        <RingLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={size}
            aria-label="RingLoader"
            data-testid="loader"
        />
    </LoadingSpinnerWrapper>
)

export default LoadingSpinner
