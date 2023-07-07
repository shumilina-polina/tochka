import { css } from "styled-components";

export const sizes = {
  desktopWidth: "1500px",
  laptopWidth: "770px",
  mobileWidth: "450px",
};

export const breakpoints = {
  laptop: `(max-width: ${sizes.desktopWidth})`,
  tablet: `(max-width: ${sizes.laptopWidth})`,
  mobile: `(max-width: ${sizes.mobileWidth})`,
};

export const mixins = {
  m4: css`
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 400;
  `,
  m5: css`
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 400;
    // font-weight: 500;
  `,
  m6: css`
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 600;
  `,
  button: css`
    color: #000;
    background-color: transparent;
    transition: color 0.3s, background-color 0.3s;
    & path {
      transition: fill 0.3s;
    }
    &:hover {
      color: #fff;
      background-color: #000;
      & path {
        fill: #fff;
      }
    }
  `,
  textSmall: css`
    color: #000;
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: -0.48px;
    @media ${breakpoints.laptop} {
      font-size: 1.11vw;
    }
    @media ${breakpoints.mobile} {
      font-size: 16px;
      line-height: 20px;
    }
  `,
};
