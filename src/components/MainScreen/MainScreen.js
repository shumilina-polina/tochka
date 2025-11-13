import SvgSelector from "components/SvgSelector";
import s from "./mainScreen.module.scss";
import Wrapper from "components/Wrapper";
import { breakpoints } from "styles/variables";
import { useState } from "react";
import { useScroll } from "react-spring";
import { useMediaQuery } from "@mui/material";
import classNames from "classnames";
import { Dnd } from "components/Dnd/Dnd";
import { Link } from "react-router-dom";
import { SkeletText } from "components/Skelet/SkeletText";

const MainScreen = ({ data, isLoading }) => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  const [scrollVal, setScrollVal] = useState(0);

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      isMobile && setScrollVal(scrollYProgress + 1);
    },
  });

  return (
    <section className={s.wr} id="wr">
      <Wrapper>
        <div className={s.collaj}>
          <div className={s.image_wrapper}>
            <img src={require(`assets/mainscreen-mobile.png`)} alt="Tochka" />
            <img
              className={classNames(s.image_mobile, s.image_mobile_1)}
              src={require(`assets/collaj/image_1.png`)}
              alt="Tochka"
            />
            <img
              className={classNames(s.image_mobile, s.image_mobile_2)}
              src={require(`assets/collaj/image_2.png`)}
              alt="Tochka"
            />
            <img
              className={classNames(s.image_mobile, s.image_mobile_3)}
              src={require(`assets/collaj/image_3.png`)}
              alt="Tochka"
            />
          </div>
          <Dnd i={1} />
          <Dnd i={2} />
          <Dnd i={3} />
          <Dnd i={4} />
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
          {data && isMobile && (
            <div>
              <SvgSelector svg={"tochka"} />
              <li className={s.welcome}>
                <p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    {data.isSummer ? "Летнее" : "Зимнее"} <br />
                    предложение
                    <span>
                      <img
                        src={require(`assets/${
                          data.isSummer ? "sun" : "winter"
                        }.png`)}
                        alt="Winter"
                      />
                      pdf
                    </span>
                  </a>
                </p>
              </li>
            </div>
          )}
          <nav>
            <ul>
              {isLoading
                ? Array.from(Array(4)).map((el, i) => <SkeletText key={i} />)
                : data?.headerTitle?.map((el) => (
                    <li
                      dangerouslySetInnerHTML={{
                        __html: el.text.replace(/\n/g, "<br>"),
                      }}
                      key={el.id}
                    />
                  ))}
              {data && !isMobile && (
                <li className={s.welcome}>
                  <p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.isSummer ? "Летнее" : "Зимнее"} <br />
                      предложение
                      <span>
                        <img
                          src={require(`assets/${
                            data.isSummer ? "sun" : "winter"
                          }.png`)}
                          alt="Winter"
                        />
                        pdf
                      </span>
                    </a>
                  </p>
                </li>
              )}
              <li>
                <Link to={"/cases"}>
                  Все наши <br /> кейсы
                  {/* TODO mobile */}
                </Link>
              </li>
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
              href="#contacts"
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
