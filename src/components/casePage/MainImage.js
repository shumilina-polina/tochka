import styled from "styled-components";
import { breakpoints } from "styles/variables";

export const MainImage = ({ src }) => {
  return <Img src={src} />;
};

const Img = styled.img`
  height: 500px;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 50px;

  @media ${breakpoints.laptop} {
    height: 33.5vw;
    margin-bottom: 3.35vw;
  }
  @media ${breakpoints.mobile} {
    height: 93.75vw;
    margin-bottom: 20px;
  }
`;
