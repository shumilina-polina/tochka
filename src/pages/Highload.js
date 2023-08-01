import { useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import {
  LastProjects,
  Project,
  ProjectGazpromneft,
  ProjectHelix,
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
  <ProjectGazpromneft />,
  <ProjectSkysmartCamp />,
  <ProjectMontblanc />,
  <ProjectVk />,
  <ProjectSkysmartBigday />,
];

const Highload = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage
          src={"highload/main.jpg"}
          srcMobile={"highload/main-mobile.jpg"}
        />
        <ClientBlockWrapper>
          <LabelClient>
            Подавали «Слезы разработчика» на&nbsp;конференции Highload&nbsp;2022
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"10:52"} svgType={"highload-case"}>
              Коллеги, надо презентовать HR-бренд в&nbsp;выгодном свете,
              подчеркнуть плюсы внутренней корпоративной культуры, заявить
              о&nbsp;себе смело среди непростой целевой аудитории —
              IT-разработчиков.
            </ChatClient>
            <ChatTochka time={"11:12"}>
              Принято, коллеги. Ваш&nbsp;запрос в&nbsp;обработке…
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "SPACE307",
              "Маркетинговое мероприятие",
              "Москва,&nbsp;2022&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery type={7}>
          <img src={require(`assets/cases/highload/1.jpg`)} alt="highload" />
        </Gallery>
        <NumberBlock>
          <Number n={5}>
            концепций стенда <br /> на&nbsp;выбор было <br /> в&nbsp;разработке
          </Number>
          <p>
            Для&nbsp;проекта была выбрана концепция Dirty Code Bar — отсылка
            к&nbsp;трендовой игре Cyberpunk. Концепция бара позволила решить
            основные запросы клиента на&nbsp;создание необходимой атмосферы
            для&nbsp;расслабленного, открытого общения.
          </p>
        </NumberBlock>
        <Gallery type={7}>
          <img src={require(`assets/cases/highload/2.jpg`)} alt="highload" />
        </Gallery>
        <NumberBlock>
          <Number n={3000}>
            банок пива <br />
            вмещал бар
          </Number>
          <p>
            Внутри стенда, помимо бара с&nbsp;классической стойкой
            и&nbsp;неоновой подсветкой, были&nbsp;предусмотрены интерактивные
            игровые консоли, а&nbsp;также видеотрансляции корпоративных
            материалов. Для&nbsp;гостей стенда было&nbsp;подготовлено
            корпоративное пиво «Слезы разработчика» в&nbsp;брендированных
            банках, специально сваренное на&nbsp;частной пивоварне.
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

export default Highload;
