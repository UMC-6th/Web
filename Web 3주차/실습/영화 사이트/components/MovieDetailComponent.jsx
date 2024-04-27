import styled from 'styled-components';

// Styled components
const MovieDetailBox = styled.div`
    width: 200px;
    height: 350px;
    position: relative;
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
`;

const TextDetailBox = styled.div`
    margin: 10px 15px;
    color: white;
`;

const TitleDetail = styled.p`
    font-size: 13px;
    font-weight: 500;
`;

const Overview = styled.p`
    height: 270px;
    font-size: 13px;
    overflow: scroll;
    word-break: break-all;
    white-space: normal;
`;

// MovieDetailComponent
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
