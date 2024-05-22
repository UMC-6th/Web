import styled from 'styled-components';

// Styled components
const MovieDetailBox = styled.div`
    width: 160px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
`;

const TextDetailBox = styled.div`
    padding: 10px;
    color: white;
`;

const Overview = styled.p`
    height: 280px;
    width: 110%;
    font-size: 13px;
    overflow: scroll;
    scrollbar-width: none;
    padding-left: -50px;
    margin-top: 10px;
    
`;

const TitleDetail = styled.p`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
`;
// MovieDetailComponent
// eslint-disable-next-line react/prop-types
function MovieDetailComponent({title, overview}) {
    return (
        <MovieDetailBox>
            <TextDetailBox>
                <TitleDetail>{title}</TitleDetail>
                <Overview>{overview}</Overview>
            </TextDetailBox>
        </MovieDetailBox>
    );
}

export default MovieDetailComponent;
