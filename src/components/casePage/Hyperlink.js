import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

export const Hyperlink = ({ children, src }) => {
  return (
    <Box>
      <img src={require(`assets/cases/${src}`)} alt="Новость" />
      <div>
        <h3>О НАС ПИШУТ</h3>
        {children}
      </div>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  @media ${breakpoints.laptop} {
    gap: 1.1vw;
    margin-top: 2.68vw;
  }
  @media ${breakpoints.mobile} {
    gap: 8px;
    margin-top: 20px;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
  & > img {
    border-radius: 100%;
    width: 64px;
    height: 64px;
    @media ${breakpoints.laptop} {
      width: 4.29vw;
      height: 4.29vw;
    }
    @media ${breakpoints.mobile} {
      width: 40px;
      height: 40px;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;

    & > h3 {
      color: rgba(34, 34, 34, 0.5);
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.24px;
      margin-bottom: 4px;
      text-transform: uppercase;
      @media ${breakpoints.laptop} {
        margin-bottom: 0.26vw;
        font-size: 0.94vw;
        line-height: 0.94vw;
      }
      @media ${breakpoints.mobile} {
        margin-bottom: 8px;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.2px;
      }
    }
    & > a {
      ${mixins.textSmall}
      letter-spacing: -0.36px;
      @media ${breakpoints.mobile} {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: -0.24px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
