import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "styled-components";
import { breakpoints } from "styles/variables";

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 6000);
  }, [copied]);

  return (
    <Button>
      <CopyToClipboard onCopy={() => setCopied(true)} text="v-tochky@mail.ru">
        <span>{copied ? "скопировано" : "v-tochky@mail.ru"}</span>
      </CopyToClipboard>
    </Button>
  );
};

const Button = styled.button`
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.48px;
  &:hover {
    text-decoration-line: underline;
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
