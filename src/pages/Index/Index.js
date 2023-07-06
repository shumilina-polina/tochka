import Wrapper from "components/Wrapper";
import s from "./index.module.scss";
import { CopyEmail } from "components/CopyEmail";
import SvgSelector from "components/SvgSelector";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "styles/variables";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Index = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

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
            <li>
              <h2>10 000+</h2>
              <p>
                гостей на мероприятиях: <br /> айтишников, менеджеров,
                <br />
                HR и не только
              </p>
            </li>

            <li>
              <h2>6 стран</h2>
              <p>
                в которых мы делаем события:
                <br /> Россия, Турция, Казахстан, Грузия,
                <br /> Армения, Индонезия, Португалия
              </p>
            </li>
            <li>
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
          <div className={s.cases_item}>
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
        </section>
      </Wrapper>
    </div>
  );
};

export default Index;
