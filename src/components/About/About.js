import s from "./about.module.scss";
import { SkeletText } from "components/Skelet/SkeletText";

const About = ({ data, isLoading }) => {
  return (
    <section className={s.about}>
      <ul>
        {isLoading
          ? Array.from(Array(4)).map((el, i) => (
              <li key={i}>
                <h2 style={{ padding: 0 }}>
                  <SkeletText />
                </h2>
                <p>
                  <SkeletText />
                </p>
              </li>
            ))
          : data?.map((el) => (
              <li>
                <h2>{el.title}</h2>
                <p style={{ whiteSpace: "pre-line" }}>{el.description}</p>
              </li>
            ))}
      </ul>
    </section>
  );
};

export default About;
