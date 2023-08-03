import { email } from "constants/contacts";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "styled-components";
import { breakpoints, mixins } from "styles/variables";

export const CopyEmail = () => {
  return (
    <Button>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </Button>
  );
};

const Button = styled.button`
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.48px;
  & > p > a {
    white-space: nowrap;
    width: 100%;
    ${mixins.hoveredText};
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
