import cn from "classnames";
import s from "./cases.module.scss";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";
import Author from "components/Author/Author";
import CountUp from "react-countup";
import Arrow from "components/Arrow";
import Parashut from "./Parashut";
import ImageHover from "components/ImageHover/ImageHover";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_URL } from "api/api";
import Circle from "components/Circle";
import { extractNumberAndText } from "utils/extractNumberAndText";
import { Video } from "components/Video/Video";

const Cases = ({ data }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <>
      <section className={s.cases}>
        <h1 className={s.title_main}>Кейсы</h1>
        <div className={s.cases_wrapper}>
          <div className={s.item}>
            {data?.case[0] && (
              <Link className={s.case_link} to={data?.case[0].url}>
                <figure className={s.left}>
                  {data.case[0].photos && (
                    <ImageHover data={data.case[0].photos} />
                  )}
                  <p style={{ whiteSpace: "pre-line" }}>
                    <Circle color={data?.case[0].circle?.color} />
                    <a>{data?.case[0].description}</a>
                  </p>
                  <Arrow />
                </figure>
              </Link>
            )}
            {data?.case[1] && (
              <Link className={s.case_link} to={data?.case[1].url}>
                <figure className={s.right}>
                  {data.case[1].photos && (
                    <ImageHover data={data.case[1].photos} />
                  )}
                  <p style={{ whiteSpace: "pre-line" }}>
                    <Circle color={data?.case[1].circle?.color} />
                    <a>{data?.case[1].description}</a>
                  </p>
                  <Arrow />
                </figure>
              </Link>
            )}
          </div>
          {data?.case[2] && (
            <div className={cn(s.item, s.item_skysmart)}>
              {(function () {
                const { number, text } = extractNumberAndText(
                  data.case[2].number?.title
                );
                return (
                  data.case[2].number && (
                    <div className={s.num}>
                      <h2>
                        <CountUp
                          separator="&nbsp;"
                          enableScrollSpy
                          scrollSpyOnce
                          start={
                            number.value > 5 ? number.value - 5 : number.value
                          }
                          end={number.value}
                          duration={1.2}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        {text}
                      </h2>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {data.case[2].number.description}
                      </p>
                    </div>
                  )
                );
              })()}
              <Link className={s.case_link} to={data.case[2].url}>
                <figure className={s.right}>
                  <div className={s.iframe_fest}>
                    {data.case[2].isPhoto || <Video data={data.case[2]} />}
                  </div>
                  <div>
                    {[
                      data.case[2].description,
                      data.case[2].secondDescription,
                    ].map(
                      (el, i) =>
                        el && (
                          <p key={el.id}>
                            <Circle color={data.case[2].circle?.color} />
                            <a style={{ whiteSpace: "pre-line" }}>{el}</a>
                          </p>
                        )
                    )}
                  </div>
                  <Arrow />
                </figure>
              </Link>
            </div>
          )}
        </div>
      </section>
      <section className={s.projects}>
        {data?.textWithAuthor[0] && (
          <h2 className={s.title_projects}>
            {data?.textWithAuthor[0].text
              .split("\n")
              .map((line, index, array) => (
                <span key={index} data-aos="fade-right">
                  {line}
                  {index < array.length - 1 && " "}
                </span>
              ))}
          </h2>
        )}
        {data?.textWithAuthor[0]?.author && (
          <div className={s.author_wrapper}>
            <Author>
              <div>
                <img
                  src={ADMIN_URL + data.textWithAuthor[0].author.photo?.url}
                  alt={data.textWithAuthor[0].author.name}
                />
              </div>
              <div>
                <h3>{data.textWithAuthor[0].author.name}</h3>
                <p style={{ whiteSpace: "pre-line" }}>
                  {data.textWithAuthor[0].author.text}
                </p>
              </div>
            </Author>
          </div>
        )}
        <div className={s.cases_wrapper}>
          <div className={cn(s.item, s.item_slezy)}>
            {data?.case[3] && (
              <Link className={s.case_link} to={data?.case[3].url}>
                <figure className={s.left}>
                  <div>
                    {data.case[3].isPhoto && (
                      <img
                        src={ADMIN_URL + data.case[3].photos[0].url}
                        alt={data.case[3].photos[0].alternativeText}
                      />
                    )}
                  </div>
                  <p style={{ whiteSpace: "pre-line" }}>
                    <Circle color={data?.case[3].circle?.color} />
                    <a>{data?.case[3].description}</a>
                  </p>
                  <Arrow />
                </figure>
              </Link>
            )}
            {data?.case[4] && (
              <figure
                className={cn(s.right, s.par)}
                style={{ position: "relative" }}
              >
                {data.case[4].isPhoto ? (
                  <img
                    src={ADMIN_URL + data.case[4].photos[0]?.url}
                    alt={data.case[4].photos[0]?.alternativeText}
                  />
                ) : (
                  data.case[4].video?.isVimeo || (
                    <Parashut data={data.case[4].video.video} />
                  )
                )}
                <section>
                  <p
                    style={{ whiteSpace: "pre-line" }}
                    onClick={() => navigate(data?.case[4].url)}
                  >
                    <Circle color={data?.case[4].circle?.color} />
                    <a>{data?.case[4].description}</a>
                  </p>
                  <Arrow />
                </section>
              </figure>
            )}
          </div>
          <div className={cn(s.item, s.item_vk)}>
            {data?.case[5] &&
              (function () {
                const { number, text } = extractNumberAndText(
                  data.case[5].number?.title
                );
                return (
                  data.case[5].number && (
                    <div className={s.num}>
                      <h2>
                        <CountUp
                          separator="&nbsp;"
                          enableScrollSpy
                          scrollSpyOnce
                          start={
                            number.value > 5 ? number.value - 5 : number.value
                          }
                          end={number.value}
                          duration={1.2}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        {text}
                      </h2>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {data.case[5].number.description}
                      </p>
                    </div>
                  )
                );
              })()}
            <Link className={s.case_link} to={data.case[5].url}>
              <figure className={s.right}>
                {data.case[5].isPhoto && (
                  <ImageHover data={data.case[5].photos} />
                )}
                <div>
                  {[
                    data.case[5].description,
                    data.case[5].secondDescription,
                  ].map(
                    (el, i) =>
                      el && (
                        <p key={el.id}>
                          <Circle color={data.case[5].circle?.color} />
                          <a style={{ whiteSpace: "pre-line" }}>{el}</a>
                        </p>
                      )
                  )}
                </div>
                <Arrow />
              </figure>
            </Link>
          </div>
          {data?.case[6] && (
            <div className={cn(s.item, s.item_smartfest)}>
              {(function () {
                const { number, text } = extractNumberAndText(
                  data.case[6].number?.title
                );
                return (
                  data.case[6].number && (
                    <div className={s.num}>
                      <h2>
                        <CountUp
                          separator="&nbsp;"
                          enableScrollSpy
                          scrollSpyOnce
                          start={
                            number.value > 5 ? number.value - 5 : number.value
                          }
                          end={number.value}
                          duration={1.2}
                        >
                          {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                        {text}
                      </h2>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {data.case[6].number.description}
                      </p>
                    </div>
                  )
                );
              })()}
              <Link className={s.case_link} to={data.case[2].url}>
                <figure className={s.right}>
                  <div className={s.iframe_fest}>
                    {data.case[6].isPhoto || <Video data={data.case[6]} />}
                  </div>
                  <div>
                    {[
                      data.case[6].description,
                      data.case[6].secondDescription,
                    ].map(
                      (el, i) =>
                        el && (
                          <p key={el.id}>
                            <Circle color={data.case[6].circle?.color} />
                            <a style={{ whiteSpace: "pre-line" }}>{el}</a>
                          </p>
                        )
                    )}
                  </div>
                  <Arrow />
                </figure>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cases;
