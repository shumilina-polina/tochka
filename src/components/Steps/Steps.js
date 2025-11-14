import s from "./steps.module.scss";

const Steps = ({ data }) => {
  return (
    <section className={s.steps}>
      {data?.map((el, i) => (
        <div
          key={el.id}
          className={s.concept}
          data-aos="fade-up"
          data-aos-delay={70 * i + 10}
        >
          <h3>{el.title}</h3>
          <ul>
            {el.text?.map((el) => (
              <li key={el.id} style={{ whiteSpace: "pre-line" }}>
                {el.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Steps;
