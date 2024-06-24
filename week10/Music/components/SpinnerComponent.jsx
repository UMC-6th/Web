import styled from 'styled-components';
import Spinner from '../assets/Spinner.gif'

function SpinnerComponent() {
    return(
        <SpinnerWrapper>
            <img src={Spinner} alt="loading" width="15%" height="15%" color='white'/>
        </SpinnerWrapper>
    );
}

const SpinnerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    
`;

export default SpinnerComponent;