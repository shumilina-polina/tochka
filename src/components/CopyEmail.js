import { email } from "constants/contacts";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "styled-components";
import { breakpoints } from "styles/variables";

export const CopyEmail = () => {
  const [text, setText] = useState(email);

  useEffect(() => {}, [text]);

  return (
    <Button>
      <CopyToClipboard
        onMouseOver={() => setText("Скопировать почту")}
        onMouseOut={() => {
          if (text !== "Скопировано") setText(email);
        }}
        onCopy={() => {
          setText("Скопировано");
          setTimeout(() => setText(email), 6000);
        }}
        text={email}
      >
        <span>{text}</span>
      </CopyToClipboard>
    </Button>
  );
};

const Button = styled.button`
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.48px;
  & > span {
    display: block;
    white-space: nowrap;
    width: 100%;
  }

  @media ${breakpoints.laptop} {
    font-size: 1.1vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
  }
`;
