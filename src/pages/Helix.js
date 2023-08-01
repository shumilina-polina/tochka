import { useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import {
  LastProjects,
  Project,
  ProjectGazpromneft,
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
  <ProjectVk />,
  <ProjectGazpromneft />,
  <ProjectHighload />,
  <ProjectSkysmartBigday />,
  <ProjectMontblanc />,
  <ProjectSkysmartCamp />,
];

const Helix = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage src={"helix/main.jpg"} srcMobile={"helix/main-mobile.jpg"} />
        <ClientBlockWrapper>
          <LabelClient>
            Прыжки с&nbsp;парашютом для&nbsp;топ-менеджеров
            Helix&nbsp;на&nbsp;выездном лидерском&nbsp;тренинге
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"9:11"} svgType={"helix-case"}>
              Нужно сделать лидерский тренинг на&nbsp;три дня
              для&nbsp;топ-менеджеров, остался месяц до&nbsp;ивента!
            </ChatClient>
            <ChatTochka time={"9:18"}>
              Спокойствие, сейчас все&nbsp;решим. Возьмем мощного тренера,
              интересный концепт, стильный глэмпинг и&nbsp;ваши страхи
              на&nbsp;себя.
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Helix",
              "Выездное мероприятие",
              "Ленинградская область,&nbsp;2022&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/helix/${i}.jpg`)}
              alt="helix"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={3}>
            дня длился <br /> тренинг
          </Number>
          <p>
            На&nbsp;три дня 11&nbsp;топ-менеджеров компании стали участниками
            настоящего скаутского лагеря: делали зарядку, гуляли по&nbsp;лесу,
            собирали палатки на&nbsp;скорость, готовили творческие номера
            и&nbsp;выполняли спортивные задания.
          </p>
        </NumberBlock>
        <Gallery type={4}>
          {[5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/helix/${i}.jpg`)}
              alt="helix"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={1}>
            месяц <br /> подготовки <br /> до&nbsp;ивента
          </Number>
          <p>
            Креатив и&nbsp;программа родились сразу,
            а&nbsp;вот&nbsp;реализовывать на&nbsp;площадке его&nbsp;было негде.
            Поэтому мы&nbsp;построили сферический шатер в&nbsp;чистом поле рядом
            с&nbsp;глэмпингом, подвели электричество и&nbsp;привезли
            с&nbsp;собой всю&nbsp;технику.
          </p>
        </NumberBlock>
        <Gallery type={5}>
          {[9, 10, 11].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/helix/${i}.jpg`)}
              alt="helix"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={11}>топ-менеджеров</Number>
          <p>
            Основой программы послужил лидерский тренинг от&nbsp;Арсена Рябуха,
            а&nbsp;яркой финальной точкой стал незабываемый экстрим — прыжки
            с&nbsp;парашютом для&nbsp;самых смелых лидеров (спойлер:
            у&nbsp;Хеликса таких лидеров&nbsp;11&nbsp;из&nbsp;11!).
          </p>
        </NumberBlock>
        <Gallery type={6} mb={true}>
          {[12, 13].map((i) => (
            <img
              key={i}
              src={
                isMobile
                  ? require(`assets/cases/helix/${i}-mobile.jpg`)
                  : require(`assets/cases/helix/${i}.jpg`)
              }
              alt="helix"
            />
          ))}
        </Gallery>
        <LastProjects>
          {projects.map((item, i) => (
            <Project key={i}>{item}</Project>
          ))}
        </LastProjects>
      </Wrapper>
    </section>
  );
};

export default Helix;
