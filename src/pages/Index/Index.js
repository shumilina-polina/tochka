import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import { CopyEmail } from "components/CopyEmail";
import SvgSelector from "components/SvgSelector";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import classNames from "classnames";
import Aos from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

const Index = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

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
              <a href="#project">
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
        <section className={s.numbers}>
          <ul>
            <li className={s.num}>
              <h2>10 000+</h2>
              <p>
                гостей на мероприятиях: <br /> айтишников, менеджеров,
                <br />
                HR и не только
              </p>
            </li>

            <li className={s.num}>
              <h2>6 стран</h2>
              <p>
                в которых мы делаем события:
                <br /> Россия, Турция, Казахстан, Грузия,
                <br /> Армения, Индонезия, Португалия
              </p>
            </li>
            <li className={s.num}>
              <h2>12 лет</h2>
              <p>
                опыта работы
                <br /> в ивент-индустрии
              </p>
            </li>
          </ul>
        </section>
        <section className={s.about}>
          <ul>
            <li>
              <h2>Эбаут</h2>
              <ReactMarkdown>
                Создаём офлайн и&nbsp;онлайн мероприятия: от&nbsp;масштабных
                маркетинговых событий до&nbsp;локальных незабываемых
                тимбилдингов. Подбираем проверенных подрядчиков под&nbsp;каждый
                ивент, чтобы&nbsp;креативная концепция реализовалась
                на&nbsp;100%.
              </ReactMarkdown>
            </li>

            <li>
              <h2>Форматы</h2>
              <ReactMarkdown>
                Конференции, маркетинговые события, корпоративные мероприятия,
                онлайн.
              </ReactMarkdown>
            </li>
            <li>
              <h2>Клиенты</h2>
              <ReactMarkdown>
                Вконтакте, Газпром, Skysmart, Montblanc, Space307, Helix.
              </ReactMarkdown>
            </li>
          </ul>
        </section>
        <section className={s.cases}>
          <h1>Кейсы</h1>
          <div className={s.items}>
            <div className={s.item}>
              <figure>
                <div>
                  <img src={require("assets/case1.jpg")} alt="TED" />
                </div>
                <p>
                  <SvgSelector svg={"case1"} />
                  Помогли Топ-менеджерам <br />
                  в Газпром подготовить <br />
                  выступления в стиле TED
                </p>
              </figure>
              <figure>
                <div>
                  <img src={require("assets/case2.jpg")} alt="Montblanc" />
                </div>

                <p>
                  <SvgSelector svg={"case2"} />
                  Оформили Montblanc <br />
                  к открытию за 2 дня, <br />
                  без приостановки <br />
                  работы бутика
                </p>
              </figure>
            </div>
            <div className={s.item}>
              <div className={s.num}>
                <h2>15 000+</h2>
                <p>
                  онлайн просмотров <br />
                  за сутки фестиваля
                </p>
              </div>
              <figure>
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
              </figure>
            </div>
          </div>
        </section>
        <section className={classNames(s.cases, s.cases_projects)}>
          <h2>
            Делаем проекты под&nbsp;ключ: берём на&nbsp;себя идею, организацию,
            менеджмент команды, техническое оснащение и&nbsp;не&nbsp;только.
          </h2>
          <div className={s.items}>
            <div className={s.item}>
              <figure>
                <div>
                  <img src={require("assets/bar.jpg")} alt="Bar" />
                </div>
                <p>
                  <SvgSelector svg={"bar"} />
                  Подавали «Слезы разработчика» в созданном нами <br />
                  баре-стенде для презентации HR-бренда IT-компании <br />
                  SPACE307 на конференции Highload 2022.
                </p>
              </figure>
              <figure>
                <div>
                  <img src={require("assets/parashut.jpg")} alt="parashut" />
                </div>

                <p>
                  <SvgSelector svg={"parashut"} />
                  Прыжки с&nbsp;парашютом <br />
                  для&nbsp;топ-менеджеров Helix на&nbsp;выездном <br />
                  лидерском тренинге
                </p>
              </figure>
            </div>
            <div className={s.item}>
              <div className={s.num}>
                <h2>50</h2>
                <p>
                  сотрудников сблизил
                  <br /> тимбилдинг
                </p>
              </div>
              <figure>
                <div>
                  <img src={require("assets/usadba.jpg")} alt="Usadba" />
                </div>
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
              </figure>
            </div>
            <div className={s.item}>
              <div className={s.num}>
                <h2>35 000+</h2>
                <p>
                  онлайн просмотров <br /> за двое суток
                  <br />
                  фестиваля
                </p>
              </div>
              <figure>
                <div>
                  <img
                    src={require("assets/smartfest-2.jpg")}
                    alt="smartfest"
                  />
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
              </figure>
            </div>
          </div>
        </section>
        <h2 className={s.tech}>
          Подбираем проверенных <br /> подрядчиков, используем <br />
          современные технологии —<br /> внимание к&nbsp;деталям
          <br />
          на&nbsp;каждом этапе.
        </h2>
      </Wrapper>
    </div>
  );
};

export default Index;
