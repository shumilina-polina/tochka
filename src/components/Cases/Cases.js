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

const Cases = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <>
      <section className={s.cases}>
        <h1 className={s.title_main}>Кейсы</h1>
        <div className={s.cases_wrapper}>
          <div className={cn(s.item, s.item_ted)}>
            <figure className={s.left}>
              {isMobile ? (
                <ImageHover folder={"ted-mobile"} />
              ) : (
                <ImageHover folder={"ted"} />
              )}
              <p>
                <SvgSelector svg={"case1"} />
                Помогли Топ-менеджерам <br />
                в Газпромнефть подготовить <br />
                выступления в стиле TED
              </p>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
            <figure className={s.right}>
              {isMobile ? (
                <ImageHover folder={"montblanc-mobile"} />
              ) : (
                <ImageHover folder={"montblanc"} />
              )}

              <p>
                <SvgSelector svg={"case2"} />
                Оформили Montblanc <br />
                к открытию за 2 дня, <br />
                без приостановки <br />
                работы бутика
              </p>
              {/* <Arrow href="https://example.com/" /> */}
            </figure>
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
            <figure className={s.right}>
              <div>
                <img src={require("assets/smartfest.jpg")} alt="Smartfest" />
              </div>
              <div>
                <p>
                  <SvgSelector svg={"case3"} />
                  Организовали и провели вместе <br />
                  со Skysmart онлайн-фестиваль для родителей
                  <br /> на тему образования и воспитания
                </p>
                <p>
                  <SvgSelector svg={"case3"} />
                  18 экспертов, среди которых <br />
                  Людмила Петрановская, Ирена
                  <br /> Понарошку, Саша Зверева и другие
                </p>
              </div>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
          </div>
        </div>
      </section>
      <section className={s.projects}>
        <h2 className={s.title_projects}>
          <span data-aos="fade-right">Делаем проекты под&nbsp;ключ:</span>{" "}
          <span data-aos="fade-right">берём на&nbsp;себя идею,</span>{" "}
          <span data-aos="fade-right">организацию, менеджмент</span>{" "}
          <span data-aos="fade-right">команды, техническое </span>
          <span data-aos="fade-right">оснащение и&nbsp;не&nbsp;только.</span>
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
            <figure className={s.left}>
              <div>
                <img src={require("assets/bar.png")} alt="Bar" />
              </div>
              <p>
                <SvgSelector svg={"bar"} />
                Подавали «Слезы разработчика» в&nbsp;созданном нами{" "}
                {isMobile || <br />}
                баре-стенде для&nbsp;презентации HR-бренда IT-компании{" "}
                {isMobile || <br />}
                SPACE307 на&nbsp;конференции Highload 2022.
              </p>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
            <figure className={s.right}>
              <Parashut />
              <p>
                <SvgSelector svg={"parashut"} />
                Прыжки с&nbsp;парашютом <br />
                для&nbsp;топ-менеджеров Helix на&nbsp;выездном <br />
                лидерском тренинге
              </p>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
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
            <figure className={s.right}>
              {isMobile ? (
                <ImageHover folder={"usadba-mobile"} />
              ) : (
                <ImageHover folder={"usadba"} />
              )}
              <div>
                <p>
                  <SvgSelector svg={"case4"} />
                  Подружили новых сотрудников
                  <br /> с командой Вконтакте в иммерсивном шоу
                  <br />
                  по пьесам Чехова в атмосфере 19 века
                </p>
                <p>
                  <SvgSelector svg={"case4"} />
                  12 актеров на протяжении <br />6 часов помогали в создании{" "}
                  <br />
                  ролевой игры
                </p>
              </div>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
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
            <figure className={s.right}>
              <div>
                <img src={require("assets/smartfest-2.jpg")} alt="smartfest" />
              </div>
              <div>
                <p>
                  <SvgSelector svg={"case3"} />
                  Организовали и&nbsp;провели вместе <br />
                  со&nbsp;Skysmart первый в&nbsp;России масштабный <br />
                  онлайн фестиваль для&nbsp;родителей
                </p>
                <p>
                  <SvgSelector svg={"case3"} />
                  38 экспертов, в&nbsp;числе которых: <br />
                  Оскар Кучера, Ася Казанцева, <br />
                  Алёна Владимирская, Антон Камолов
                </p>
              </div>
              {/* <Arrow href={"https://example.com/"} /> */}
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cases;
