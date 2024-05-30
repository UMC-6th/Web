// Pagination.jsx
import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:not(:disabled):hover {
    background-color: #f0f0f0;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      ))}
      <PageButton
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
