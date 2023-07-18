import styled from "styled-components";
import { breakpoints } from "styles/variables";
import SvgSelector from "./SvgSelector";
import { Link } from "react-router-dom";

const Arrow = ({ href }) => (
  <Button>
    <Link target="blank" to={href}>
      <SvgSelector svg={"arrow"} />
    </Link>
  </Button>
);

export default Arrow;

const Button = styled.button`
  position: absolute;
  border-radius: 100px;
  bottom: 0;
  right: 0;
  border: 0.784px solid #000;
  transition: transform 0.3s;
  transform: rotate(-125deg);
  & svg {
    transition: transform 0.3s;
  }
  &:hover {
    transform: rotate(-90deg);
  }
  &:active,
  &:focus {
    & svg {
      transform: translateY(20%);
    }
  }
  & > a {
    display: block;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${breakpoints.laptop} {
    }
    @media ${breakpoints.mobile} {
    }
  }
`;
