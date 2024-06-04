import { css } from 'styled-components';

const media = {
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
};

export default media;
