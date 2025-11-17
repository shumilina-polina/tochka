import SvgSelector from "components/SvgSelector";
import s from "./footer.module.scss";

export const MoreAboutEvents = ({ data }) => {
  const buttonData = data.find((el) => el.isAllArticles);
  return (
    <div className={s.events_wrapper}>
      <h3 className={s.events_title}>Или узнать больше об ивентах</h3>
      <div className={s.events_wrapper__flex}>
        <ul className={s.events_list}>
          {data.map(
            (el) =>
              !el.isAllArticles && (
                <li className={s.events_item} key={el.id}>
                  <a href={el.link} target="_blank" rel="noopener noreferrer">
                    <p>{el.text}</p>
                    <button className={s.events_item__arrow}>
                      <SvgSelector svg={"arrow_events"} />
                    </button>
                  </a>
                </li>
              )
          )}
        </ul>
        {buttonData && (
          <a
            href={buttonData.link}
            target="_blank"
            rel="noopener noreferrer"
            className={s.events_button}
          >
            {buttonData.text}
          </a>
        )}
      </div>
    </div>
  );
};
