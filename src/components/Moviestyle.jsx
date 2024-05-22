import styled from 'styled-components';


const MovieBox = styled.div`
    width: 280px;
    height: 350px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: black;
    background-color: rgb(31,21,54);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    
`;

const BottomBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    background-color: rgb(11,11,24);
    
`;

const TextBox = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    font-size: 15px;
    font-weight: bold;
    color: white;
`;

const PaddingBox = styled.div`
    width: 10px;
    display: flex;
`;

// MovieComponent
function Moviestyle({image, title, voteAverage}) {
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

export default Moviestyle;