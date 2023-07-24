import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import s from "./about.module.scss";

const About = () => {
  return (
    <section className={s.about}>
      <ul>
        <li>
          <h2>Эбаут</h2>
          <ReactMarkdown>
            Создаём офлайн и&nbsp;онлайн мероприятия: от&nbsp;масштабных
            маркетинговых событий до&nbsp;локальных незабываемых тимбилдингов.
            Подбираем проверенных подрядчиков под&nbsp;каждый ивент,
            чтобы&nbsp;креативная концепция реализовалась на&nbsp;100%.
          </ReactMarkdown>
        </li>

        <li>
          <h2>Форматы</h2>
          <ReactMarkdown>
            Конференции, маркетинговые события, корпоративные мероприятия,
            онлайн.
          </ReactMarkdown>
        </li>
        <li>
          <h2>Клиенты</h2>
          <ReactMarkdown>
            Вконтакте, Газпромнефть, Skysmart, Montblanc, Space307, Helix.
          </ReactMarkdown>
        </li>
      </ul>
    </section>
  );
};

export default About;
