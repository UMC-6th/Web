import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const NotFoundItem = styled.div`

    color :white;
    text-align: center;
    margin : 200px;
    font-size : 30px;
    
    div {
        margin-top : 30px;
    }

    Link {
    text-decoration : none;
    color :white;
    }

    @media (max-width: 768px) {
        font-size : 10px;
    }

`

const Oops = styled.div`
font-size : 50px;
    font-weight: 10px;
    font-weight: bold;
    
    @media (max-width: 768px) {
       
        font-size : 20px;
    }
`

const NotFoundError =styled.div`
    font-style: italic;
    font-weight: bold;
    margin-bottom : 30px;
    
`
const StyledLink = styled(Link)`
    text-decoration : none;
    color :white;
    
    
`
export default function NotFound() {
    return (
        <NotFoundItem>
        <div>
            <Oops>
                <div>Oops!</div>
            </Oops>
           
            <div>예상치 못한 에러가 발생했습니다.</div>
            
            <NotFoundError>
                <div>Not Found</div>
            </NotFoundError>
            
             <StyledLink to='/'>메인으로 이동하기</StyledLink>
            
            
        </div>
        </NotFoundItem>
    )
}
