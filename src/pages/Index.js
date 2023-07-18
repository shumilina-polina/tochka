import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import { CopyEmail } from "components/CopyEmail";
import SvgSelector from "components/SvgSelector";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";
import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Author from "components/Author/Author";
import Numbers from "components/Numbers/Numbers";
import { useScroll } from "react-spring";
import Formats from "components/Formats/Formats";
import Cases from "components/Cases/Cases";
import Steps from "components/Steps/Steps";
import About from "components/About/About";

const Index = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);
  const [scrollVal, setScrollVal] = useState(0);

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      isMobile && setScrollVal(scrollYProgress + 1);
    },
  });

  useEffect(() => {
    Aos.init({ once: isMobile });
  }, []);

  return (
    <div>
      <section className={s.wr}>
        <Wrapper>
          <div className={s.main}>
            {isMobile && (
              <div>
                <SvgSelector svg={"tochka"} />
                <CopyEmail />
              </div>
            )}
            <nav>
              <ul>
                <li>
                  Делаем ивенты <br />
                  под ключ{" "}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7.12599"
                      cy="6.71291"
                      r="6.53517"
                      fill="black"
                    />
                  </svg>
                </li>
                <li>
                  Применяем
                  <br /> современные <br />
                  технологии
                </li>
                <li>
                  Объединяем
                  <br /> дерзкие идеи
                  <br /> и лучших <br />
                  специалистов
                </li>
                <li>
                  <a
                    href={require("assets/documents/ТОЧКА Ивент КП.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Портфолио
                    <span>pdf</span>
                  </a>
                  <br />
                  {!isMobile && <CopyEmail />}
                </li>
              </ul>
            </nav>
            <div>
              {!isMobile && <SvgSelector svg={"tochka"} />}
              <a
                style={
                  scrollVal > 1.9
                    ? { opacity: "0", pointerEvents: "none" }
                    : { opacity: "1" }
                }
                href="#project"
              >
                <button>
                  <div>
                    <SvgSelector svg={"arrow"} />
                    <span>
                      Обсудить {!isMobile && <br />}
                      проект
                    </span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </Wrapper>
      </section>
      <Wrapper>
        <Numbers />
        <About />
        <Cases />
        <h2 className={s.tech}>
          Подбираем проверенных <br /> подрядчиков, используем <br />
          современные технологии —<br /> внимание к&nbsp;деталям
          <br />
          на&nbsp;каждом этапе.
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
