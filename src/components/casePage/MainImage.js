import styled from "styled-components";
import { breakpoints } from "styles/variables";

export const MainImage = ({ src }) => {
  return <Img src={src} />;
};

const Img = styled.img`
  display: block;
  aspect-ratio: 16 / 9;
  grid-area: image;
  flex-shrink: 0;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 17px;
  @media ${breakpoints.laptop} {
    border-radius: 1.21vw;
  }
  @media ${breakpoints.mobile} {
    border-radius: 12px;
  }
`;
