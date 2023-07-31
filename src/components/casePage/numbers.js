import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

export const NumberBlock = ({ children }) => <Block>{children}</Block>;
const Block = styled.div`
  display: grid;
  align-items: center;
  padding: 80px 0;
  grid-template-columns: 1fr 2fr;
  @media ${breakpoints.laptop} {
    padding: 5.36vw 0;
  }
  @media ${breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 50px 0;
    grid-template-columns: 1fr;
  }

  & > p {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.64px;
    @media ${breakpoints.laptop} {
      font-size: 2.14vw;
      line-height: 2.8vw;
      letter-spacing: -0.04vw;
    }
    @media ${breakpoints.mobile} {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Number = ({ children, n }) => (
  <NumBlock>
    <span>{n}</span>
    <span>{children}</span>
  </NumBlock>
);
const NumBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  @media ${breakpoints.mobile} {
    gap: 2px;
  }
  & > span:first-child {
    font-size: 67.5px;
    line-height: 60px;
    letter-spacing: -2.7px;
    @media ${breakpoints.laptop} {
      font-size: 4.52vw;
      line-height: 4.02vw;
      letter-spacing: -0.18vw;
    }
    @media ${breakpoints.mobile} {
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -1.92px;
    }
  }
  & > span:last-child {
    ${mixins.textSmall}
    @media ${breakpoints.mobile} {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
