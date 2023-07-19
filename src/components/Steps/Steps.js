import s from "./steps.module.scss";

const Steps = () => {
  return (
    <section className={s.steps}>
      <div className={s.concept} data-aos="fade-up" data-aos-delay="10">
        <h3>Концепция</h3>
        <ul>
          <li>
            Создаем креативную идею, <br />
            которая цепляет
          </li>
          <li>Ищем подходящую площадку</li>
          <li>Продумываем программу и&nbsp;наполнение</li>
          <li>
            Подбираем лучших подрядчиков
            <br /> для&nbsp;реализации креативной
            <br />
            концепции
          </li>
          <li>
            Ищем экспертов и&nbsp;артистов, <br />
            которые точно понравятся
            <br />
            участникам
          </li>
        </ul>
      </div>
      <div className={s.concept} data-aos="fade-up" data-aos-delay="70">
        <h3>Подготовка</h3>
        <ul>
          <li>
            Продумываем дизайн <br />и визуальное оформление <br />
            проекта
          </li>
          <li>
            Готовим спикеров
            <br />
            ик выступлениям
          </li>
          <li>
            Ставим шоу-программу <br />с режиссером события
          </li>
          <li>
            Берем на себя <br />
            все технические вопросы
          </li>
        </ul>
      </div>
      <div className={s.concept} data-aos="fade-up" data-aos-delay="14подбираем0">
        <h3>Реализация</h3>
        <ul>
          <li>
            Снимаем и монтируем <br />
            видеоконтент
          </li>
          <li>
            Управляем монтажом <br />и оснащением площадки
          </li>
          <li>
            Работаем как команда <br />
            во время самого мероприятия
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Steps;
