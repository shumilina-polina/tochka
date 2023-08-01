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
  <ProjectMontblanc />,
  <ProjectSkysmartBigday />,
];

const Vk = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage src={"vk/main.jpg"} srcMobile={"vk/main-mobile.jpg"} />
        <ClientBlockWrapper>
          <LabelClient>
            Подружили новых <br /> сотрудников Вконтакте в&nbsp;шоу
            по&nbsp;пьесам Чехова <br /> в&nbsp;атмосфере 19&nbsp;века
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"9:11"} svgType={"vk-case"}>
              Коллеги, ждем ваших идей для&nbsp;корпоратива одного
              из&nbsp;отделов. Надо познакомить и&nbsp;подружить новых
              сотрудников с&nbsp;командой, создать неформальную атмосферу
              для&nbsp;общения и&nbsp;знакомства. P.S.&nbsp;Кстати,
              это&nbsp;команда маркетинга, они&nbsp;уже&nbsp;видели все. Удачи!
            </ChatClient>
            <ChatTochka time={"9:18"}>
              ВКонтакте — классика социальных сетей. Приглашаем коллег стать
              героями классических произведений и&nbsp;окунуться
              в&nbsp;атмосферу эстетики усадьбы времен Чехова.
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Вконтакте",
              "Ролевая игра и&nbsp;интерактивный спектакль",
              "Ленинградская область, 2022&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={require(`assets/cases/vk/${i}.jpg`)} alt="vk" />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={6}>
            часов длилось
            <br />
            мероприятие
          </Number>
          <p>
            Для&nbsp;полного погружения гостей мы&nbsp;интегрировали
            в&nbsp;спектакль ролевую игру, где&nbsp;каждый участник становился
            персонажем со&nbsp;своим характером, сюжетом&nbsp;и&nbsp;линией
            поведения.
          </p>
        </NumberBlock>
        <Gallery type={4}>
          {[5, 6, 7, 8].map((i) => (
            <img key={i} src={require(`assets/cases/vk/${i}.jpg`)} alt="vk" />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={12}>актеров</Number>
          <p>
            Актеры театра «Мастерская» играли отрывки пьесы
            не&nbsp;на&nbsp;сцене, а&nbsp;прямо среди гостей. Диалоги
            разворачивались ярко, экспрессивно, вовлекая в&nbsp;действие
            каждого.
          </p>
        </NumberBlock>
        <Gallery type={2}>
          {[9, 10, 11].map((i) => (
            <img key={i} src={require(`assets/cases/vk/${i}.jpg`)} alt="vk" />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={50}>гостей</Number>
          <p>
            Гости находились в&nbsp;атмосфере 19&nbsp;века: творили, смеялись,
            играли шуточную свадьбу, стали свидетелями&nbsp;драки
            и&nbsp;убийства, а&nbsp;в&nbsp;конце продали саму усадьбу
            на&nbsp;аукционе!
          </p>
        </NumberBlock>
        <Gallery type={3} mb={true} cln={"vk"}>
          {[12, 13].map((i) => (
            <img
              key={i}
              src={
                isMobile
                  ? require(`assets/cases/vk/${i}-mobile.jpg`)
                  : require(`assets/cases/vk/${i}.jpg`)
              }
              alt="vk"
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

export default Vk;
