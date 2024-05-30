import Fetch from '../components/fetch';
import { useState } from 'react';
import styled from "styled-components";

function Popular() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleTotalPages = (totalPages) => {
    setMaxPage(totalPages); // 총 페이지 수를 설정
  };

  return (
    <>
      <Fetch url={url}  onTotalPages={handleTotalPages} />
      <Pagination style={{ textAlign: 'center'}}>
        <Button disabled={page <= 1} onClick={() => handlePageChange(page - 1)} isDisabled={page <= 1}>&lt;</Button>
        <span>{page}</span>
        <Button disabled={page >= maxPage} onClick={() => handlePageChange(page + 1)} isDisabled={page >= maxPage}>&gt;</Button>
      </Pagination>
    </>
  );
}

const Pagination = styled.div `
  color: white;
  height: 70px;
  text-algin: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => props.isDisabled ? 'gray' : 'white'};

`;

export default Popular;
