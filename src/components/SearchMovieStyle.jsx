import styled from 'styled-components';


export const SearchInputBox = styled.div`
    display: flex;
    align-item : center;
    
`
export const SearchContainer = styled.div`
    width: 100%;
    height: 20px;
    min-height: 80vh;
    background-color: rgb(19,19,40) ;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    
`;

export const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding-top: 100px;
`;

export const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    margin-right: 10px;
    
`;

export const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: yellow;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 60px;
`;

export const SearchMovieContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 10px;
    padding-left: 10px;
    gap: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: yellow;
    }
    overflow-x: hidden;
    min-height: 50vh;
    margin: 0px;
    margin-top: 40px;
    border-radius: 20px;
`;
export const MovieItem = styled.div`
    flex-basis: calc(25% - 10px);
    display: flex;
    height: 400px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;
    &:hover .movieContainer__movieItem__movieDetailWrapper {
        display: flex;
    }
    margin-top: 40px;
    
`;

export const MovieTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    
`;

export const MovieRating = styled.div`
    font-size: 14px;
`;

export const MovieDetailWrapper = styled.div`
display: none;
`;

export const  LoadingText = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding-top: 30px;
`;