import React from 'react'
import { HeaderContainer, HeadLine, HeadIcon, CartNum } from '../styled'
import { CartIcon } from '../constants/icons'
import { useSelector } from 'react-redux';


function HeaderComponents() {
    const { totalAmount } = useSelector(state => state.cart);
    return (
        <HeaderContainer>
            <HeadLine>UMC PlayList</HeadLine>
            <HeadIcon><CartIcon />
            <CartNum>{totalAmount}</CartNum>
            </HeadIcon>


        </HeaderContainer>
    )
}

export default HeaderComponents