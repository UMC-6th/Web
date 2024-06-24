import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../src/module/cartSlice';
import { ChevronDown, ChevronUp } from '../constants/icon';

function MusicComponent({ id, title, singer, price, img, amount }) {
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

    return (
    <MusisContents>
        <MusicImg src={img} alt={title} />
        <Music>
        <MusicTitle>{title} | {singer}</MusicTitle>
        <MusicSinger>₩ {price}</MusicSinger>
        </Music>
        <Btn>
        <Btn_updown onClick={handleIncrease}><ChevronUp /></Btn_updown>
        <p>{amount}</p>
        <Btn_updown onClick={handleDecrease}><ChevronDown /></Btn_updown>
        </Btn>
    </MusisContents>
    );
}

const MusisContents = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    margin-bottom: 10px;
`;

const MusicImg = styled.img`
    height: 100%;
    width: auto;
    object-fit: cover;
`;

const Music = styled.div`
    width: 60%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MusicTitle = styled.h3`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const MusicSinger = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    color: grey;
    margin-top: 5px;
`;

const Btn = styled.div`
    height: 100%;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    border: none;
`;

const Btn_updown = styled.button`
    width: 30px;
    height: 30px;
    background-color: yellowgreen;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active {
    background-color: green;
    }
`;

export default MusicComponent;
