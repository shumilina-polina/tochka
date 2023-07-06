import Wrapper from "components/Wrapper";
import s from "./footer.module.scss";

import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";

const Footer = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <footer className={s.footer} id="project">
      <Wrapper>
        <div className={s.wrapper}></div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
