import styled from "styled-components";
import { breakpoints } from "styles/variables";

const Styled = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: auto;
  padding: 0;
  overflow: hidden;
  @media ${breakpoints.laptop} {
    max-width: 95%;
  }
  @media ${breakpoints.mobile} {
    max-width: 90%;
  }
`;

const Wrapper = ({ children }) => {
  return <Styled>{children}</Styled>;
};

export default Wrapper;
