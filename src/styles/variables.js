import { css } from "styled-components";

export const sizes = {
  desktopWidth: "1400px",
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
    color: #222;
    background-color: transparent;
    transition: color 0.3s, background-color 0.3s;
    & path {
      transition: fill 0.3s;
    }
    &:hover {
      color: #fff;
      background-color: #222;
      & path {
        fill: #fff;
      }
    }
  `,
  textSmall: css`
    color: #222;
    font-size: 18px;
    line-height: 24px;
    @media ${breakpoints.laptop} {
      font-size: 1.4vw;
      line-height: 1.875vw;
    }
    @media ${breakpoints.mobile} {
      font-size: 16px;
      line-height: 20px;
    }
  `,
  hoveredText: css`
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size 0.5s;
    &:hover,
    &:focus {
      background-size: 100% 2px;
      @media ${breakpoints.mobile} {
        background-size: 100% 1px;
      }
    }
  `,
};
