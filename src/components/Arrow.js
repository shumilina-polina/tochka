import styled from "styled-components";
import { breakpoints } from "styles/variables";
import SvgSelector from "./SvgSelector";

const Arrow = () => (
  <Button>
    <span>
      <SvgSelector svg={"arrow"} />
    </span>
  </Button>
);

export default Arrow;

const Button = styled.button`
  position: absolute;
  border-radius: 100px;
  bottom: 0;
  right: 0;
  border: 0.784px solid #222;
  transition: transform 0.3s;
  transform: rotate(-125deg);
  & svg {
    transition: transform 0.3s;
    @media ${breakpoints.laptop} {
      height: 60%;
    }
  }

  & > span {
    display: block;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${breakpoints.laptop} {
      width: 2.4vw;
      height: 2.4vw;
    }
    @media ${breakpoints.mobile} {
      width: 36px;
      height: 36px;
    }
  }
`;
