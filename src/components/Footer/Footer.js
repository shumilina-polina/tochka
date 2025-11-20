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
import { formatPhoneNumber } from "./formatPhoneNumber";

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
          <h3 className={s.authors_title}>Команда</h3>
          <ul>
            {authors?.data.map((el) => (
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
          </ul>
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
              <li className={s.item} style={{ whiteSpace: "pre-line" }}>
                {footerData?.data?.ip}
              </li>
              <li className={s.item} style={{ whiteSpace: "pre-line" }}>
                {footerData?.data?.details}
              </li>
              <li className={s.item}>
                {footerData?.data?.phone && (
                  <a
                    href={`tel:${footerData.data.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatPhoneNumber(footerData.data.phone)}
                  </a>
                )}
                <br />
                <a
                  href={`mailto:${footerData?.data?.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footerData?.data?.email}
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
