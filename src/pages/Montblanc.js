import { useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import {
  LastProjects,
  Project,
  ProjectGazpromneft,
  ProjectHelix,
  ProjectHighload,
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
  <ProjectGazpromneft />,
  <ProjectHighload />,
  <ProjectSkysmartCamp />,
  <ProjectVk />,
  <ProjectSkysmartBigday />,
];

const Montblanc = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage
          src={"montblanc/main.jpg"}
          srcMobile={"montblanc/main-mobile.jpg"}
        />
        <ClientBlockWrapper>
          <LabelClient>
            Оформили Montblanc к&nbsp;открытию за&nbsp;2&nbsp;дня,
            без&nbsp;приостановки работы бутика
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"9:11"} svgType={"montblanc-case"}>
              У&nbsp;нас есть задача — обновить дизайн бутика, создать симбиоз
              локального искусства и&nbsp;миссии бренда Montblanc,
              чтобы&nbsp;удивить светскую публику Петербурга.
            </ChatClient>
            <ChatTochka time={"9:18"}>
              В&nbsp;нашем случае искусство не&nbsp;требует жертв,
              а&nbsp;помогает решать ваши задачи!
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Montblanc",
              "Маркетинговое мероприятие",
              "Санкт&#8209;Петербург, 2021&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/montblanc/${i}.jpg`)}
              alt="montblanc"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={2}>
            дня ушло
            <br />
            на оформление
          </Number>
          <p>
            В&nbsp;кратчайшие сроки был&nbsp;проведен кастинг художников, работы
            которых перекликались с&nbsp;идеологией бренда.
          </p>
        </NumberBlock>
        <Gallery type={4}>
          {[5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/montblanc/${i}.jpg`)}
              alt="montblanc"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={"3D"}>картины</Number>
          <p>
            Клиент остановил свой выбор на&nbsp;художнике{" "}
            <a
              href="https://www.s-p-l-a-s-h.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Викторе Splash
            </a>
            , после чего был&nbsp;создан эскиз арт-объекта — 3D-картина
            с&nbsp;эффектом оптической иллюзии.
          </p>
        </NumberBlock>
        <Gallery type={2}>
          {[9, 10, 11].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/montblanc/${i}.jpg`)}
              alt="montblanc"
            />
          ))}
        </Gallery>
        <NumberBlock>
          {isMobile || <div></div>}
          <p>
            На&nbsp;торжественном открытии представители светской публики
            узнавали о&nbsp;новинках бренда, знакомились с&nbsp;художником
            и&nbsp;его&nbsp;произведением искусства, угощались изысканными
            закусками и&nbsp;напитками, а&nbsp;также подписывали открытки
            любимым с&nbsp;помощью каллиграфиста.
          </p>
        </NumberBlock>
        <LastProjects>
          {projects.map((item) => (
            <Project>{item}</Project>
          ))}
        </LastProjects>
      </Wrapper>
    </section>
  );
};

export default Montblanc;
