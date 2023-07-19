import Wrapper from "components/Wrapper";
import s from "./footer.module.scss";
import Author from "components/Author/Author";
import SvgSelector from "components/SvgSelector";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { email } from "constants/contacts";

const Footer = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <footer className={s.footer} id="project">
      <Wrapper>
        <div className={s.wr_main}>
          <a
            href="https://t.me/olia_volki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Обсудить проект
          </a>
          <div className={s.wr}>
            <div className={s.policy}>
              <a
                href={require("assets/documents/ПОЛИТИКА_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Политика обработки персональных данных
              </a>
            </div>
            <div className={s.cont_wrapper}>
              <div className={s.inst}>
                <a
                  href="https://instagram.com/tochka_eventagency?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </a>
              </div>

              <div className={s.contacts}>
                <a
                  href="tel:+79216344336"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +7 (921) 634 43 36
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
              </div>
            </div>

            <span className={s.ip}>
              ИП Рыбина <br />
              Екатерина
              <br /> Александровна
            </span>
            {/* <div className={s.form}>
            <Form />
          </div> */}
            <div className={s.authors}>
              <Author footer>
                <div>
                  <img src={require("assets/author-olga.jpg")} alt="Author" />
                </div>
                <div>
                  <h3>Ольга Вольчек</h3>
                  <p>
                    co-founder,
                    <br /> аккаунт-директор
                  </p>
                </div>
              </Author>
              <Author footer>
                <div>
                  <img src={require("assets/author-masha.jpg")} alt="Author" />
                </div>
                <div>
                  <h3>Маша Фишер</h3>
                  <p>
                    co-founder,
                    <br /> режиссёр
                  </p>
                </div>
              </Author>
              <Author footer>
                <div>
                  <img src={require("assets/author-andrey.jpg")} alt="Author" />
                </div>
                <div>
                  <h3>Андрей{isMobile && <br />} Павлушин</h3>
                  <p>
                    арт-директор, <br />
                    lead-дизайнер
                  </p>
                </div>
              </Author>
              <Author footer>
                <div>
                  <img
                    src={require("assets/author-evgeniy.jpg")}
                    alt="Author"
                  />
                </div>
                <div>
                  <h3>Евгений{isMobile && <br />} Клочко</h3>
                  <p>
                    технический <br />
                    директор
                  </p>
                </div>
              </Author>
              <Author footer>
                <div>
                  <img src={require("assets/author-sergey.jpg")} alt="Author" />
                </div>
                <div>
                  <h3>Сергей{isMobile && <br />} Колесников</h3>
                  <p>
                    автор цифрового <br />
                    контента
                  </p>
                </div>
              </Author>
            </div>
            <Link
              to={"/"}
              className={s.logo}
              onClick={() => window.scrollTo(0, 0)}
            >
              <SvgSelector svg={"tochka"} />
            </Link>
            {isMobile || (
              <div className={s.designed}>
                <a
                  href="https://www.behance.net/pavlushin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Задизайнили в Артели
                </a>
              </div>
            )}
            <span className={s.event}>Точка Ивент © 2023</span>
          </div>
        </div>
      </Wrapper>
      {isMobile && (
        <div className={s.designed}>
          <a
            href="https://www.behance.net/pavlushin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Задизайнили в Артели
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
