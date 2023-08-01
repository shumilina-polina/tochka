import SvgSelector from "components/SvgSelector";
import s from "./mainScreen.module.scss";
import Wrapper from "components/Wrapper";
import { breakpoints } from "styles/variables";
import { useState } from "react";
import { useScroll } from "react-spring";
import { useMediaQuery } from "@mui/material";
import classNames from "classnames";

const MainScreen = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  const [scrollVal, setScrollVal] = useState(0);

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      isMobile && setScrollVal(scrollYProgress + 1);
    },
  });

  return (
    <section className={s.wr}>
      <Wrapper>
        <div className={s.collaj}>
          <div className={s.image_wrapper}>
            <img
              src={require(`assets/mainscreen${isMobile ? "-mobile" : ""}.png`)}
              alt="Tochka"
            />
          </div>
          <div id="video-1"></div>
          <div className={classNames(s.iframe_wrapper, s.iframe_smartfest)}>
            <iframe
              src="https://player.vimeo.com/video/847575962?h=9ae564daca&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>

          <div className={classNames(s.iframe_wrapper, s.iframe_camp)}>
            <iframe
              src="https://player.vimeo.com/video/847576525?h=b62d624b97&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classNames(s.iframe_wrapper, s.iframe_helix)}>
            <iframe
              src="https://player.vimeo.com/video/847584255?h=dfb0bf7df3&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>
          <div className={classNames(s.iframe_wrapper, s.iframe_helix2)}>
            <iframe
              src="https://player.vimeo.com/video/847589403?h=1a6ebd1755&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={s.main}>
          {isMobile && (
            <div>
              <SvgSelector svg={"tochka"} />
              <li className={s.welcome}>
                <a
                  href={require("assets/documents/ТОЧКА Ивент КП.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Летнее <br />
                  предложение
                  <span>
                    <img src={require("assets/sun.png")} alt="Sun" />
                    pdf
                  </span>
                </a>
              </li>
            </div>
          )}
          <nav>
            <ul>
              <li>
                Делаем ивенты <br />
                под ключ
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
              {!isMobile && (
                <li className={s.welcome}>
                  <a
                    href={require("assets/documents/ТОЧКА Ивент КП.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Летнее <br />
                    предложение
                    <span>
                      {/* <SvgSelector svg={"sun"}/> */}
                      <img src={require("assets/sun.png")} alt="Sun" />
                      pdf
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
          <div>
            {!isMobile && (
              <div className={s.tochka_wrapper}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <circle
                    cx="6.53517"
                    cy="9.61134"
                    r="6.53517"
                    fill="#222222"
                  />
                </svg>
                <SvgSelector svg={"tochka"} />
              </div>
            )}
            <a
              className={s.project_button}
              style={
                scrollVal > 1.9
                  ? { opacity: "0", pointerEvents: "none" }
                  : { opacity: "1" }
              }
              href="#project"
            >
              <button>
                <SvgSelector svg={"arrow"} />
                <span>
                  Обсудить {!isMobile && <br />}
                  проект
                </span>
              </button>
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default MainScreen;
