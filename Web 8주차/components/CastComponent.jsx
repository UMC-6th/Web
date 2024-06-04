import styled from 'styled-components';
import media from '../styles/media';

function CastComponent({image, name}) {
    const firstName = name.split(' ')[0];
    const imageUrl = image.endsWith('null') ? `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s` : image;

    return(
        <CastBox>
            <Image src={imageUrl} alt={name}/>
            <NameText>{firstName}</NameText>
        </CastBox>
    );
}

const CastBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`;

const NameText = styled.p`
    font-size: 15px;
    color: white;
    ${media.mobile`
        font-size: 10px;
    `}
`;

export default CastComponent;