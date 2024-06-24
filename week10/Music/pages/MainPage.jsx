import styled from 'styled-components'
import MusicComponent from '../components/MusicComponent'
import SpinnerComponent from "../components/SpinnerComponent"
import { CartIcon } from '../constants/icon'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, clearCart, calculateTotals } from '../src/module/cartSlice';
import { useEffect } from 'react';

function MainPage() {
    const dispatch = useDispatch();
    const { carts, totalQuantity, totalAmount, status, error } = useSelector(
        (state) => state.carts
    );

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const handleCleanCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(calculateTotals());
    }, [carts, dispatch]);

    if (status === "loading") {
        return (
            <LoadingContainer>
                <SpinnerComponent />
                <LoadingText>로딩 중...</LoadingText>
            </LoadingContainer>
        );
    }  

    if (status === "failed") {
        alert(`에러 발생: ${error}`);
    }

    return (
        <PlaylistContainer>
            <Navbar>
                <MainText>Chacco Playlist</MainText>
                <IconWrapper>
                    <CartIcon/>
                    {totalQuantity > 0 && (
                        <CartBadge>{totalQuantity}</CartBadge>
                    )}
                </IconWrapper>
            </Navbar>

            <MusicContainer>
                {carts.map(item => (
                    <MusicComponent
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        singer={item.singer}
                        price={item.price}
                        img={item.img}
                        amount={item.amount}
                    />
                ))}
            </MusicContainer>

            <Line/>
            <TextWrapper>
                <SubText>총 금액</SubText>
                <SubText>₩ {totalAmount.toLocaleString()}</SubText>
            </TextWrapper>
            <button onClick={handleCleanCart}>전체 초기화</button>
            <TextWrapper/>

        </PlaylistContainer>
    )
}

const PlaylistContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Navbar = styled.div`
    width: 50%;
    height: 10%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MainText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #04E532;
    padding-top: 3px;
`;

const IconWrapper = styled.div`
    width: 25px;
    height: 25px;
`;

const CartBadge = styled.div`
    position: relative;
    top: -30px;
    right: -13px;
    background-color: #04E532;
    color: white;
    font-size: 8px;
    font-weight: bold;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MusicContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

const Line = styled.div`
    width: 50%;
    height: 2px;
    background-color: lightgrey;
    margin-bottom: 30px;
`;

const TextWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`;

const SubText = styled.p`
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    overflow: ellipsis;
`;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoadingText = styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: white;
`;

export default MainPage