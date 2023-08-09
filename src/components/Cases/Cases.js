import cn from "classnames";
import s from "./cases.module.scss";
import SvgSelector from "components/SvgSelector";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";
import Author from "components/Author/Author";
import CountUp from "react-countup";
import Arrow from "components/Arrow";
import Parashut from "./Parashut";
import ImageHover from "components/ImageHover/ImageHover";
import { Link, useNavigate } from "react-router-dom";

const Cases = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <>
      <section className={s.cases}>
        <h1 className={s.title_main}>Кейсы</h1>
        <div className={s.cases_wrapper}>
          <div className={cn(s.item, s.item_ted)}>
            <Link className={s.case_link} to={"/gazpromneft"}>
              <figure className={s.left}>
                {isMobile ? (
                  <ImageHover folder={"ted-mobile"} />
                ) : (
                  <ImageHover folder={"ted"} />
                )}
                <p>
                  <SvgSelector svg={"case1"} />
                  <a>
                    Помогли Топ-менеджерам <br />
                    в Газпромнефть подготовить <br />
                    выступления в стиле TED
                  </a>
                </p>
                <Arrow href={"https://example.com/"} />
              </figure>
            </Link>
            <Link className={s.case_link} to={"/montblanc"}>
              <figure className={s.right}>
                {isMobile ? (
                  <ImageHover folder={"montblanc-mobile"} />
                ) : (
                  <ImageHover folder={"montblanc"} />
                )}

                <p>
                  <SvgSelector svg={"case2"} />
                  <a>
                    Оформили Montblanc <br />
                    к открытию за 2 дня, <br />
                    без приостановки <br />
                    работы бутика
                  </a>
                </p>
                <Arrow />
              </figure>
            </Link>
          </div>
          <div className={cn(s.item, s.item_skysmart)}>
            <div className={s.num}>
              <h2>
                <CountUp
                  separator="&nbsp;"
                  enableScrollSpy
                  scrollSpyOnce
                  start={14990}
                  end={15000}
                  duration={1.2}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                +
              </h2>
              <p>
                онлайн просмотров <br />
                за сутки фестиваля
              </p>
            </div>
            <Link className={s.case_link} to={"/skysmartcamp"}>
              <figure className={s.right}>
                <div className={s.iframe_fest}>
                  <iframe
                    src="https://player.vimeo.com/video/847576525?h=b62d624b97&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <p>
                    <SvgSelector svg={"case3"} />
                    <a>
                      Организовали и провели вместе <br />
                      со Skysmart онлайн-фестиваль для родителей
                      <br /> на тему образования и воспитания
                    </a>
                  </p>
                  <p>
                    <SvgSelector svg={"case3"} />
                    <a>
                      18 экспертов, среди которых <br />
                      Людмила Петрановская, Ирена
                      <br /> Понарошку, Саша Зверева и другие
                    </a>
                  </p>
                </div>
                <Arrow />
              </figure>
            </Link>
          </div>
        </div>
      </section>
      <section className={s.projects}>
        <h2 className={s.title_projects}>
          {isMobile ? (
            <>
              <span data-aos="fade-right">Делаем проекты</span>{" "}
              <span data-aos="fade-right">под&nbsp;ключ:</span>{" "}
              <span data-aos="fade-right">берём на&nbsp;себя идею,</span>{" "}
              <span data-aos="fade-right">организацию,</span>{" "}
              <span data-aos="fade-right">менеджмент</span>{" "}
              <span data-aos="fade-right">команды, техническое </span>
              <span data-aos="fade-right">оснащение</span>
              <span data-aos="fade-right">и&nbsp;не&nbsp;только.</span>
            </>
          ) : (
            <>
              <span data-aos="fade-right">Делаем проекты под&nbsp;ключ:</span>{" "}
              <span data-aos="fade-right">берём на&nbsp;себя идею,</span>{" "}
              <span data-aos="fade-right">организацию, менеджмент</span>{" "}
              <span data-aos="fade-right">команды, техническое </span>
              <span data-aos="fade-right">
                оснащение и&nbsp;не&nbsp;только.
              </span>
            </>
          )}
        </h2>
        <div className={s.author_wrapper}>
          <Author>
            <div>
              <img src={require("assets/author-olga.jpg")} alt="Author" />
            </div>
            <div>
              <h3>Ольга Вольчек</h3>
              <p>co-founder, аккаунт-директор</p>
            </div>
          </Author>
        </div>
        <div className={s.cases_wrapper}>
          <div className={cn(s.item, s.item_slezy)}>
            <Link className={s.case_link} to={"/highload"}>
              <figure className={s.left}>
                <div>
                  <img src={require("assets/bar.png")} alt="Bar" />
                </div>
                <p>
                  <SvgSelector svg={"bar"} />
                  <a>
                    Подавали «Слезы разработчика» в&nbsp;созданном нами{" "}
                    {isMobile || <br />}
                    баре-стенде {isMobile && <br />}для&nbsp;презентации
                    HR-бренда IT-компании {isMobile || <br />}
                    SPACE307 на&nbsp;конференции Highload 2022.
                  </a>
                </p>
                <Arrow />
              </figure>
            </Link>
            {/* <Link className={s.case_link} to={"/helix"}> */}
            <figure
              className={cn(s.right, s.par)}
              style={{ position: "relative" }}
            >
              <Parashut />
              <section>
                <p onClick={() => navigate("/helix")}>
                  <SvgSelector svg={"parashut"} />
                  <a>
                    Прыжки с&nbsp;парашютом <br />
                    для&nbsp;топ-менеджеров {isMobile && <br />} Helix
                    на&nbsp;выездном <br />
                    лидерском тренинге
                  </a>
                </p>
                <Arrow />
              </section>
            </figure>
            {/* </Link> */}
          </div>
          <div className={cn(s.item, s.item_vk)}>
            <div className={s.num}>
              <h2>
                <CountUp
                  separator="&nbsp;"
                  enableScrollSpy
                  scrollSpyOnce
                  start={45}
                  end={50}
                  duration={1.2}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </h2>
              <p>
                сотрудников сблизил
                <br /> тимбилдинг
              </p>
            </div>
            <Link className={s.case_link} to={"/vk"}>
              <figure className={s.right}>
                {isMobile ? (
                  <ImageHover folder={"usadba-mobile"} />
                ) : (
                  <ImageHover folder={"usadba"} />
                )}
                <div>
                  <p>
                    <SvgSelector svg={"case4"} />
                    <a>
                      Подружили новых сотрудников
                      <br /> с командой ВКонтакте в иммерсивном шоу
                      <br />
                      по пьесам Чехова в атмосфере 19 века
                    </a>
                  </p>
                  <p>
                    <SvgSelector svg={"case4"} />
                    <a>
                      12 актеров на протяжении <br />6 часов помогали в создании{" "}
                      <br />
                      ролевой игры
                    </a>
                  </p>
                </div>
                <Arrow />
              </figure>
            </Link>
          </div>
          <div className={cn(s.item, s.item_smartfest)}>
            <div className={s.num}>
              <h2>
                <CountUp
                  separator="&nbsp;"
                  enableScrollSpy
                  scrollSpyOnce
                  start={34990}
                  end={35000}
                  duration={1.2}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                +
              </h2>
              <p>
                онлайн просмотров <br /> за двое суток
                <br />
                фестиваля
              </p>
            </div>
            <Link className={s.case_link} to={"/skysmartbigday"}>
              <figure className={s.right}>
                <div className={s.iframe_fest}>
                  <iframe
                    src="https://player.vimeo.com/video/847575962?h=9ae564daca&loop=1&autoplay=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <p>
                    <SvgSelector svg={"case3"} />
                    <a>
                      Организовали и&nbsp;провели вместе <br />
                      со&nbsp;Skysmart первый в&nbsp;России масштабный <br />
                      онлайн фестиваль для&nbsp;родителей
                    </a>
                  </p>
                  <p>
                    <SvgSelector svg={"case3"} />
                    <a>
                      38 экспертов, в&nbsp;числе которых: <br />
                      Оскар Кучера, Ася Казанцева, <br />
                      Алёна Владимирская, Антон Камолов
                    </a>
                  </p>
                </div>
                <Arrow />
              </figure>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cases;
