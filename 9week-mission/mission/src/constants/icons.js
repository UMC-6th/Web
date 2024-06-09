// BY HERO_ICONS

import styled from "styled-components";


export const CartIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 '
        fill='none'
        viewBox='0 0 24 24'
        stroke='white'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        />
      </svg>
    );
  };
  
  export const ChevronDown = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='#5852FE'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    );
  };
  
  const StyledUp = styled.svg`
  width:50px;
  height:50px;
  `
 export const ChevronUp = () => {
  return (
    <StyledUp
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#5852FE'
      strokeWidth={2}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
    </StyledUp>
  );
};