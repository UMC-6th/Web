import styled from 'styled-components';
import Spinner from '../assets/Spinner.gif'

function SpinnerComponent() {
    return(
        <SpinnerWrapper>
            <img src={Spinner} alt="loading" width="10%" height="10%" color='white'/>
        </SpinnerWrapper>
    );
}

const SpinnerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default SpinnerComponent;