import { useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import { Hyperlink } from "components/casePage/Hyperlink";
import {
  LastProjects,
  Project,
  ProjectGazpromneft,
  ProjectHelix,
  ProjectHighload,
  ProjectMontblanc,
  ProjectSkysmartCamp,
  ProjectVk,
} from "components/casePage/LastProjects";
import { MainImage } from "components/casePage/MainImage";
import {
  ChatClient,
  ChatTochka,
  ChatWrapper,
  ClientBlockWrapper,
  LabelClient,
  List,
} from "components/casePage/clientBlock";
import { Gallery } from "components/casePage/galleries/Gallery";
import { Number, NumberBlock } from "components/casePage/numbers";
import { breakpoints } from "styles/variables";

const projects = [
  <ProjectHelix />,
  <ProjectGazpromneft />,
  <ProjectHighload />,
  <ProjectMontblanc />,
  <ProjectVk />,
  <ProjectSkysmartCamp />,
];

const Skysmartbigday = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage
          src={"skysmartbigday/main.jpg"}
          srcMobile={"skysmartbigday/main-mobile.jpg"}
        />
        <ClientBlockWrapper>
          <LabelClient>
            Организовали онлайн фестиваль «BIG&nbsp;DAY открытых дверей
            Skysmart»
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"9:11"} svgType={"skysmartbigday-case"}>
              Приглашаем вас&nbsp;поучаствовать в&nbsp;тендере: мы&nbsp;ищем
              надежную команду для&nbsp;организации фестиваля Skysmart!
              Нам&nbsp;важно сформировать экспертный образ бренда среди
              родителей по&nbsp;всей России и&nbsp;развенчать мифы
              об&nbsp;онлайн-образовании. Кстати, среди участников тендера —
              лидеры ивент-рынка…
            </ChatClient>
            <ChatTochka time={"9:18"}>
              Вызов принят. <br /> Мы&nbsp;обещаем удивить своими идеями!
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Skysmart",
              "Онлайн&#8209;фестиваль",
              "Москва,&nbsp;2021&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartbigday/${i}.jpg`)}
              alt="skysmartbigday"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={5}>
            месяцев длилась <br />
            подготовка <br />
            к&nbsp;фестивалю
          </Number>
          <p>
            Мы&nbsp;выиграли тендер с&nbsp;концепцией «BIG&nbsp;DAY открытых
            дверей». Чтобы&nbsp;вызвать доверие родителей, мы&nbsp;выбрали
            ключевой образ — здание реальной школы, которое мы&nbsp;перенесли
            в&nbsp;онлайн.
          </p>
        </NumberBlock>
        <Gallery type={8}>
          {[5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartbigday/${i}.jpg`)}
              alt="skysmartbigday"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={4}>потока</Number>
          <p>
            Во&nbsp;время фестиваля параллельно шли четыре потока
            (или&nbsp;же&nbsp;были открыты четыре школьных кабинета): Кабинет
            директора, Актовый зал, Диджитал класс и&nbsp;Лаборатория
            для&nbsp;детей.
            <Hyperlink src={"skysmartbigday/tincoff.jpg"}>
              <p>
                <a
                  href="https://s.tinkoff.ru/story/aVE5JQmKb0NGjPD0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Тинькофф: как&nbsp;меньше ссориться с&nbsp;ребенком,
                  справляться
                  {isMobile || <br />} со&nbsp;стрессом и&nbsp;выгодно
                  инвестировать в&nbsp;учебу
                </a>
              </p>
            </Hyperlink>
          </p>
        </NumberBlock>
        <Gallery type={2}>
          {[9, 10, 11].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartbigday/${i}.jpg`)}
              alt="skysmartbigday"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={38}>экспертов</Number>
          <p>
            В&nbsp;числе которых Оскар&nbsp;Кучера, Ася&nbsp;Казанцева,
            Алёна&nbsp;Владимирская, Антон&nbsp;Камолов и&nbsp;другие.
          </p>
        </NumberBlock>
        <Gallery type={9}>
          {[12, 13, 14].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartbigday/${i}.jpg`)}
              alt="skysmartbigday"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={6}>
            часов <br /> трансляции
          </Number>
          <p>
            Также в&nbsp;гостях побывали педагоги, психологи, звездные родители,
            которые отвечали на&nbsp;вопросы зрителей в&nbsp;прямом эфире:
            как&nbsp;не&nbsp;ссориться с&nbsp;ребенком, как&nbsp;решать проблемы
            с&nbsp;учебой, возможно ли&nbsp;выстроить прозрачный
            и&nbsp;продуктивный диалог со&nbsp;школой, как&nbsp;помочь
            с&nbsp;выбором будущей профессии, если&nbsp;все&nbsp;вокруг блогеры,
            а&nbsp;не&nbsp;врачи и&nbsp;юристы.
            <Hyperlink src={"skysmartbigday/liberty.jpg"}>
              <p>
                <a
                  href="https://libertymag.ru/activation/smartfest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liberty Magazine: Онлайн-школа Skysmart проведет
                  в&nbsp;октябре
                  {isMobile || <br />} ежегодный фестиваль для&nbsp;родителей
                </a>
              </p>
            </Hyperlink>
          </p>
        </NumberBlock>
        <Gallery type={3} cln={"vk"}>
          {[15, 16].map((i) => (
            <img
              key={i}
              src={
                isMobile
                  ? require(`assets/cases/skysmartbigday/${i}-mobile.jpg`)
                  : require(`assets/cases/skysmartbigday/${i}.jpg`)
              }
              alt="skysmartbigday"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={"35 000+"}>просмотров</Number>
          <p>
            Проект стал уникальным для&nbsp;аудитории, сформировал
            у&nbsp;родителей устойчивый позитивный образ бренда и&nbsp;получил
            более 40&nbsp;имиджевых упоминаний в&nbsp;СМИ.
          </p>
        </NumberBlock>

        <LastProjects>
          {projects.map((item, i) => (
            <Project key={i}>{item}</Project>
          ))}
        </LastProjects>
      </Wrapper>
    </section>
  );
};

export default Skysmartbigday;
