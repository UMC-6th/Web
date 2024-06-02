import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const MovieBox = styled.div`
    display: flex;
    width: 160px;
    height: 320px;
    position: absolute;
    justify-content: space-between;
    flex-direction: column;
    background-color: black;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer; /* Add cursor pointer to indicate clickable */
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BottomBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: rgb(20, 20, 20);
`;

const TextBox = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    color: white;
`;

const PaddingBox = styled.div`
    width: 10px;
    display: flex;
`;

function MovieComponent(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.id}`, { // 여기에서 props.title을 props.id로 변경
            state: props
        });
    };
    

    return (
        <MovieBox className='movie-container' onClick={onClickMovieItem}>
            <Image src={props.image} alt={props.title} />
            <BottomBox>
                <PaddingBox />
                <TextBox>
                    <p id='movieBox__bottomBox__textBox__title'>{props.title}</p>
                    <p id='movieBox__bottomBox__textBox__vote_average'>★{Number(props.voteAverage).toFixed(1)}</p>
                </TextBox>
                <PaddingBox />
            </BottomBox>
        </MovieBox>
    );
}

MovieComponent.propTypes = {
    id: PropTypes.number.isRequired, // 영화 ID를 위한 propType 추가
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieComponent;
