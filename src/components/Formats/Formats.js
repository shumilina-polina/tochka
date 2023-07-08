import SvgSelector from "components/SvgSelector";
import s from "./formats.module.scss";

const Formats = () => {
  return (
    <section className={s.wr}>
      <h2>Форматы</h2>
      <div>
        <div data-aos="fade-up">
          <h3>Конференции (01)</h3>
          <p>
            Насыщенная программная часть с&nbsp;адаптированным
            под&nbsp;аудиторию, уникальным контентом. Современный софт
            и&nbsp;оборудование. Интерактивные технологии и&nbsp;вовлечение
            участников онлайн и&nbsp;офлайн.
          </p>
          <SvgSelector svg={"format-1"} />
        </div>
        <div data-aos="fade-up">
          <h3>Маркетинговые события (02)</h3>
          <p>
            Глубокое погружение в&nbsp;продукт. Работаем с&nbsp;репутацией
            бренда в&nbsp;СМИ и&nbsp;digital-пространстве. Креативные решения
            с&nbsp;использованием мультимедийного оборудования и&nbsp;промо
            арт-объектов.
          </p>
          <SvgSelector svg={"format-2"} />
        </div>
        <div data-aos="fade-up">
          <h3>Корпоративные мероприятия (03)</h3>
          <p>
            Ориентируемся на&nbsp;бизнес-задачи: HR-бренд, лояльность
            сотрудников. Нестандартные концепции и&nbsp;площадки. Знаем,
            как&nbsp;вовлечь сотрудников и&nbsp;сделать небанальный тимбилдинг.
          </p>
          <SvgSelector svg={"format-3"} />
        </div>
        <div data-aos="fade-up">
          <h3>Онлайн (04)</h3>
          <p>
            Разнообразные технические решения под&nbsp;любые задачи.
            Максимальная вовлеченность и&nbsp;польза для&nbsp;аудитории.
            Разработка современных решений для&nbsp;визуального контента.
          </p>
          <SvgSelector svg={"format-4"} />
        </div>
      </div>
    </section>
  );
};

export default Formats;
