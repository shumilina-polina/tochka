import { useRef } from "react";
import s from "./numbers.module.scss";
import CountUp from "react-countup";

const Numbers = () => {
  const countUpRef = useRef(null);

  return (
    <section className={s.numbers}>
      <ul>
        <li className={s.num}>
          <h2>
            <CountUp
              separator="&nbsp;"
              enableScrollSpy
              scrollSpyOnce
              start={9990}
              end={10000}
            >
              {({ countUpRef }) => (
                <>
                  <span ref={countUpRef} />
                </>
              )}
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
  );
};

export default Numbers;
