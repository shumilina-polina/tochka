import CountUp from "react-countup";
import styled from "styled-components";
import { breakpoints } from "styles/variables";
import { extractNumberAndText } from "utils/extractNumberAndText";

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 72px 0;
  gap: 248px;
  @media ${breakpoints.laptop} {
    gap: 17.71vw;
    padding: 5.14vw 0;
  }
  @media ${breakpoints.mobile} {
    padding: 20px 0;
    gap: 30px;
    flex-direction: column;
  }
  & > h2 {
    flex-shrink: 0;
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 133%;
    color: #222;
    width: 193px;

    @media ${breakpoints.laptop} {
      font-size: 1.29vw;
      width: 13.79vw;
    }
    @media ${breakpoints.mobile} {
      width: 100%;
      font-size: 14px;
    }
    & > span {
      display: block;
      line-height: 100%;
      font-size: 72px;
      margin-bottom: 9px;
      @media ${breakpoints.laptop} {
        margin-bottom: 0.64vw;
        font-size: 5.14vw;
      }
      @media ${breakpoints.mobile} {
        margin-bottom: 2px;
        font-size: 48px;
      }
    }
  }
  & > p {
    font-weight: 400;
    line-height: 131%;
    letter-spacing: -0.02em;
    color: #222;
    font-size: 32px;
    @media ${breakpoints.laptop} {
      font-size: 2.29vw;
    }
    @media ${breakpoints.mobile} {
      font-size: 18px;
    }
  }
`;

export const CaseNumberBlock = ({ data }) => {
  const { number, text } = extractNumberAndText(data.title);
  return (
    <Box>
      <h2 style={{ whiteSpace: "pre-line" }}>
        <CountUp
          separator="&nbsp;"
          enableScrollSpy
          scrollSpyOnce
          start={number.value > 5 ? number.value - 5 : number.value}
          end={number.value}
          duration={1.2}
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
        {text}
      </h2>
      <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
    </Box>
  );
};
