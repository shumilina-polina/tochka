import styled from "styled-components";
import { breakpoints } from "styles/variables";
import { Link } from "react-router-dom";
import SvgSelector from "components/SvgSelector";
import Arrow from "components/Arrow";
import { useEffect } from "react";

const CaseHeader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Header>
      <SvgSelector svg={"tochka"} />
      <Link to={"/"}>
        <span>На главную</span>
        <Arrow />
      </Link>
    </Header>
  );
};

export default CaseHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 0;
  @media ${breakpoints.laptop} {
    padding: 2.28vw 0;
  }
  @media ${breakpoints.mobile} {
    padding: 15px 0;
  }
  & > svg {
    @media ${breakpoints.laptop} {
      width: 6vw;
    }
    @media ${breakpoints.mobile} {
      width: 76px;
    }
  }
  & > a {
    display: flex;
    align-items: center;
    gap: 12px;
    @media ${breakpoints.laptop} {
      gap: 0.8vw;
    }
    @media ${breakpoints.mobile} {
      gap: 10px;
    }
    &:hover {
      & > button svg {
        transform: translateY(20%);
      }
    }
    & > button {
      transform: rotate(90deg);
      position: static;
    }
    & > span {
      text-align: center;
      font-size: 18px;
      line-height: 32px;
      @media ${breakpoints.laptop} {
        font-size: 1.2vw;
        line-height: 2.14vw;
      }
      @media ${breakpoints.mobile} {
        font-size: 14px;
        line-height: 32px;
      }
    }
  }
`;
