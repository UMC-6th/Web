import React from "react";
import CreditsFile from "./CreditsFile";
import styled from "styled-components";

const CreditTitle = styled.h3`
color:white;
font-size: x-large;
font-weight: bold;
text-align: center;
`

export default function Credits({credits}){  //map함수로 배열갯수만큼 뿌려줌(credits은 api받아온 정보 배열)
    const imgURL = "https://image.tmdb.org/t/p/w500"
    
    const creditsNull = (profilePath) => {
        return profilePath ? `${imgURL}${profilePath}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';
    };
    
    return(
        <div>
        <div>
            <CreditTitle>출연진</CreditTitle>
        {credits.cast && credits.cast.length > 0 && //1. credits.cast정의 2.길이가 0 이상인지 확인
            credits.cast.map((item) => (
            <CreditsFile
                name={item.name}
                imgURL={creditsNull(item.profile_path)}
            />
        ))}
        </div>

        <div>
        <CreditTitle>제작진</CreditTitle>
            {credits.crew&& credits.crew.length >0 &&
                 credits.cast.map((item) => (
                    <CreditsFile
                        name={item.name}
                        imgURL={creditsNull(item.profile_path)}
                    />
                ))}

        </div>
        </div>

    )

}