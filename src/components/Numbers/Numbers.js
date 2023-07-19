import s from "./numbers.module.scss";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <section className={s.numbers}>
      <ul>
        <li className={s.num}>
          <h2>
            <CountUp
              separator="&nbsp;"
              enableScrollSpy
              scrollSpyOnce
              start={9995}
              end={10000}
              duration={1.2}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            +
          </h2>
          <p>
            гостей на мероприятиях: <br /> айтишников, менеджеров,
            <br />
            HR и не только
          </p>
        </li>

        <li className={s.num}>
          <h2>
            <CountUp
              separator="&nbsp;"
              enableScrollSpy
              scrollSpyOnce
              start={1}
              end={6}
              duration={1.2}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>{" "}
            стран
          </h2>
          <p>
            в которых мы делаем события:
            <br /> Россия, Турция, Казахстан, Грузия,
            <br /> Армения, Индонезия, Португалия
          </p>
        </li>
        <li className={s.num}>
          <h2>
            <CountUp
              separator="&nbsp;"
              enableScrollSpy
              scrollSpyOnce
              start={7}
              end={12}
              duration={1.2}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>{" "}
            лет
          </h2>
          <p>
            опыта работы
            <br /> в ивент-индустрии
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Numbers;
