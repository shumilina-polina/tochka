import Wrapper from "components/Wrapper";
import s from "./footer.module.scss";
import Author from "components/Author/Author";
import SvgSelector from "components/SvgSelector";
import { Link } from "react-router-dom";
import Form from "components/Form/Form";
import { useFetch } from "api/useFetch";
import QueryString from "qs";
import { ADMIN_URL } from "api/api";

import ArtelLogo from "assets/artel.svg";
import { MoreAboutEvents } from "./MoreAboutEvents";

const query = QueryString.stringify(
  {
    populate: {
      aboutEvents: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

const Footer = () => {
  const { data: authors } = useFetch(`authors?populate=*`);
  const { data: footerData } = useFetch(`footer?` + query);

  return (
    <footer className={s.footer} id="project">
      <Wrapper>
        <div className={s.wr}>
          <Form />
          {footerData && <MoreAboutEvents data={footerData.data.aboutEvents} />}
        </div>
        <div className={s.authors}>
          {authors?.data?.map((el) => (
            <Author key={el.id} footer>
              <div>
                <img src={ADMIN_URL + el.photo?.url} alt={el.name} />
              </div>
              <div>
                <h3>{el.name}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{el.text}</p>
              </div>
            </Author>
          ))}
        </div>
        <div className={s.footer_bottom}>
          <div className={s.footer_bottom__contacts}>
            <Link
              to={"/"}
              className={s.logo}
              onClick={() => window.scrollTo(0, 0)}
            >
              <SvgSelector svg={"tochka"} />
            </Link>
            <ul className={s.footer_bottom__list}>
              {Array.from(Array(2)).map((el, i) => (
                <li key={i} className={s.item}>
                  ИП Рыбина <br />
                  ЕкатеринаАнатольевна
                </li>
              ))}
              <li className={s.item}>
                <a
                  href={footerData?.data?.phone}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  allala
                  {/* {footerData?.data?.phone} //TODO */}
                </a>
                <br />
                <a
                  href={`mailto:test`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  allala
                </a>
              </li>
            </ul>
          </div>

          <a
            className={s.artel}
            href="https://artpavlushin.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ArtelLogo} alt="Артель" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
