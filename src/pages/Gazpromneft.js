import { useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import {
  LastProjects,
  Project,
  ProjectHelix,
  ProjectHighload,
  ProjectMontblanc,
  ProjectSkysmartBigday,
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
  <ProjectSkysmartCamp />,
  <ProjectHighload />,
  <ProjectMontblanc />,
  <ProjectVk />,
  <ProjectSkysmartBigday />,
];

const Gazpromneft = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage
          src={"gazpromneft/main.jpg"}
          srcMobile={"gazpromneft/main-mobile.jpg"}
        />
        <ClientBlockWrapper>
          <LabelClient>
            Подготовили <br /> топ-менеджерам
            <br /> в&nbsp;Газпромнефть
            <br /> выступления в&nbsp;стиле&nbsp;TED
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"8:01"} svgType={"gazprom-case"}>
              Хотим донести до&nbsp;сотрудников всех регионов ценность изменений
              в&nbsp;компании. И&nbsp;лучше не&nbsp;так&nbsp;официально,
              как&nbsp;у&nbsp;нас&nbsp;обычно.
            </ChatClient>
            <ChatTochka time={"8:03"}>
              Давайте возьмем популярный жанр вечерних шоу, в&nbsp;котором будет
              много юмора, живого общения и&nbsp;интерактива!
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Газпромнефть",
              "Гибридная конференция",
              "Санкт-Петербург, 2021 г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/gazpromneft/${i}.jpg`)}
              alt="gazprom"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={100}>
            оффлайн <br />
            гостей
          </Number>
          <p>
            Чтобы снизить градус официальности мероприятия, мы&nbsp;выбрали
            формат вечернего телешоу для&nbsp;традиционного награждения
            и&nbsp;конференции.
          </p>
        </NumberBlock>
        <Gallery type={2}>
          {[5, 6, 7].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/gazpromneft/${i}.jpg`)}
              alt="gazprom"
            />
          ))}
        </Gallery>
        <NumberBlock>
          {isMobile || <div></div>}
          <p>
            Топ-менеджерам мы&nbsp;помогли подготовить выступления в&nbsp;стиле
            TED — динамичные и&nbsp;вовлекающие. Выступления заранее записали
            на&nbsp;телестудии. Участники конференции смотрели выступления
            онлайн и&nbsp;офлайн: давали обратную связь спикерам
            через&nbsp;приложение, задавали вопросы.
          </p>
        </NumberBlock>
        <Gallery type={3}>
          {[8, 9].map((i) => (
            <img
              key={i}
              src={
                isMobile
                  ? require(`assets/cases/gazpromneft/${i}-mobile.jpg`)
                  : require(`assets/cases/gazpromneft/${i}.jpg`)
              }
              alt="gazprom"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={500}>
            зрителей <br />
            эфира
          </Number>
          <p>
            Нам удалось создать современный дизайн {isMobile || <br />}
            конференции, который отразил визуальные тренды
            и&nbsp;не&nbsp;противоречил корпоративному стилю. Кстати, теперь
            дизайн закреплен за&nbsp;конференцией.
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

export default Gazpromneft;
