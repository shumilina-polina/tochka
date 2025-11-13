import { SkeletNumberBlock } from "components/Skelet/SkeletNumberBlock";
import s from "./numbers.module.scss";
import CountUp from "react-countup";

const extractNumberAndText = (str) => {
  const numberMatch = str.match(/(\d[\d\s]*\d+|\d+)/);
  if (!numberMatch) return { number: null, text: str };

  const number = {
    display: numberMatch[0],
    value: parseInt(numberMatch[0].replace(/\s/g, "")),
  };

  const text = str.slice(numberMatch[0].length);

  return { number, text };
};

const Numbers = ({ data, isLoading }) => {
  return (
    <section className={s.numbers}>
      <ul>
        {isLoading
          ? Array.from(Array(3)).map((el, i) => <SkeletNumberBlock key={i} />)
          : data?.map((el) => {
              const { number, text } = extractNumberAndText(el.title);
              return (
                <li key={el.id} className={s.num}>
                  <h2>
                    <CountUp
                      separator="&nbsp;"
                      enableScrollSpy
                      scrollSpyOnce
                      start={number.value > 5 ? number.value - 5 : number.value}
                      end={number.value}
                      duration={1.2}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    {text}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>{el.description}</p>
                </li>
              );
            })}
      </ul>
    </section>
  );
};

export default Numbers;
