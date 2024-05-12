import styled from 'styled-components';

// Styled components
const MovieBox = styled.div`
    width: 200px;
    height: 350px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: black;
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
    background-color: rgb(40, 40, 40);
`;

const TextBox = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    font-size: 11px;
    font-weight: bold;
    color: white;
`;

const PaddingBox = styled.div`
    width: 10px;
    display: flex;
`;

// MovieComponent
function MovieComponent({image, title, voteAverage}) {
    return (
        <MovieBox>
            <Image src={image} alt={title} />
            <BottomBox>
                <PaddingBox />
                <TextBox>
                    <p id='movieBox__bottomBox__textBox__title'>{title}</p>
                    <p id='movieBox__bottomBox__textBox__vote_average'>★{Number(voteAverage).toFixed(1)}</p>
                </TextBox>
                <PaddingBox />
            </BottomBox>
        </MovieBox>
    );
}

export default MovieComponent;