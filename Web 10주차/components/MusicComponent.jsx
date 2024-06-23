import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../src/module/cartSlice';
import { ChevronDown, ChevronUp } from '../constants/icon'; 

function MusicComponent({id, title, singer, price, img, amount}) {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.carts.carts.find((cartItem) => cartItem.id === id));

    const handleIncrease = () => {
        dispatch(increase(id));
    };

    const handleDecrease = () => {
        if (item && item.amount === 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decrease(id));
        }
    };

    return(
        <Container>
            <Image src={img} alt={title}/>
            <TextWrapper>
                <TitleText>{title} | {singer}</TitleText>
                <SingerText>₩ {price}</SingerText>
            </TextWrapper>
            <ButtonContainer>
                <Button onClick={handleIncrease}><ChevronUp/></Button>
                <TitleText>{amount}</TitleText>
                <Button onClick={handleDecrease}><ChevronDown/></Button>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-contents: space-between;
    margin-top: 25px;
    padding: 0; 
`;

const Image = styled.img`
    height: 100%;
    width: auto;
    object-fit: cover;
`;

const TextWrapper = styled.div`
    width: 60%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    overflow: ellipsis;
`;

const SingerText = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    color: grey;
    margin-top: 5px;
`;

const ButtonContainer = styled.div`
    height: 100%;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 180px;
`;

const Button = styled.div`
    width: 100%;
    height: 100%;
`;

export default MusicComponent