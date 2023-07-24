import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Author from "components/Author/Author";
import Numbers from "components/Numbers/Numbers";
import Formats from "components/Formats/Formats";
import Cases from "components/Cases/Cases";
import Steps from "components/Steps/Steps";
import About from "components/About/About";
import MainScreen from "components/MainScreen/MainScreen";

const Index = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <div>
      <MainScreen />
      <Wrapper>
        <Numbers />
        <About />
        <Cases />
        <h2 className={s.tech}>
          {isMobile ? (
            <>
              <span data-aos="fade-left">Подбираем </span>
              <span data-aos="fade-left">проверенных </span>
              <span data-aos="fade-left">подрядчиков, </span>
              <span data-aos="fade-left">используем </span>
              <span data-aos="fade-left">современные </span>
              <span data-aos="fade-left">технологии —</span>
              <span data-aos="fade-left">внимание к&nbsp;деталям </span>
              <span data-aos="fade-left">на&nbsp;каждом этапе.</span>
            </>
          ) : (
            <>
              <span data-aos="fade-left">Подбираем проверенных</span>
              <span data-aos="fade-left">подрядчиков, используем</span>
              <span data-aos="fade-left">современные технологии —</span>
              <span data-aos="fade-left">внимание к&nbsp;деталям</span>
              <span data-aos="fade-left">на&nbsp;каждом этапе.</span>
            </>
          )}
        </h2>
        <div className={s.author_wrapper_masha}>
          <Author>
            <div>
              <img src={require("assets/author-masha.jpg")} alt="Author" />
            </div>
            <div>
              <h3>Маша Фишер</h3>
              <p>co-founder, режиссёр</p>
            </div>
          </Author>
        </div>
        <Steps />
        <Formats />
      </Wrapper>
    </div>
  );
};

export default Index;
