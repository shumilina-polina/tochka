import s from "./formats.module.scss";
import Circle from "components/Circle";

const Formats = ({ data }) => {
  return (
    <section className={s.wr}>
      <h2>Форматы</h2>
      <div>
        {data?.map((el, i) => (
          <div key={el.id} data-aos="fade-up">
            <Circle color={el.circle?.color} />
            <h3>
              {el.titleWithDescription?.title} (
              {i + 1 < 10 ? `0${i + 1}` : `${i + 1}`})
            </h3>
            <p style={{ whiteSpace: "pre-line" }}>
              {el.titleWithDescription?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formats;
