import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import styled from "styled-components";
import { movies } from "../MovieList";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  background-color: #22254b;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #22254b;
    cursor: not-allowed;
  }
`;

const CurrentPageColor = styled.p`
  color:white;
  margin: 0 5px;
  padding: 10px 20px;`


export default function Pagenation({currentPage, onPageChange }){

    return (
        <PaginationContainer>
          <PaginationButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </PaginationButton>
         <CurrentPageColor>{currentPage}</CurrentPageColor> 
          <PaginationButton
            onClick={() => onPageChange(currentPage + 1)}
          >
             {">"}
          </PaginationButton>
        </PaginationContainer>
      );
    }
 
    
