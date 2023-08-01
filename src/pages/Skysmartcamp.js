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
  ProjectSkysmartBigday,
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
  <ProjectSkysmartBigday />,
];

const Skysmartcamp = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <section>
      <Wrapper>
        <CaseHeader />
        <MainImage
          src={"skysmartcamp/main.jpg"}
          srcMobile={"skysmartcamp/main-mobile.jpg"}
        />
        <ClientBlockWrapper>
          <LabelClient>
            Устроили масштабный онлайн фестиваль «SMARTfest: КЭМП
            для&nbsp;родителей»
          </LabelClient>
          <ChatWrapper>
            <ChatClient time={"9:11"} svgType={"skysmartcamp-case"}>
              Коллеги, спасибо за&nbsp;мероприятие в&nbsp;прошлом году.
              В&nbsp;этом году нас&nbsp;снова обязали провести тендер, готовы
              поучаствовать? Новые реалии вносят коррективы: все&nbsp;спикеры
              будут подключаться удаленно из&nbsp;разных часовых поясов.
            </ChatClient>
            <ChatTochka time={"9:18"}>
              Новыми реалиями нас&nbsp;не&nbsp;напугать,
              у&nbsp;нас&nbsp;уже&nbsp;есть идеи, как&nbsp;сделать
              этот&nbsp;проект интересным.
            </ChatTochka>
          </ChatWrapper>
          <List
            list={[
              "Skysmart",
              "Онлайн&#8209;фестиваль",
              "Санкт-Петербург,&nbsp;2022&nbsp;г.",
            ]}
          />
        </ClientBlockWrapper>
        <Gallery>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartcamp/${i}.jpg`)}
              alt="skysmartcamp"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={6}>
            часов <br /> трансляций
          </Number>
          <p>
            Мы&nbsp;снова выиграли тендер, на&nbsp;этот
            раз&nbsp;с&nbsp;концепцией «КЭМП для&nbsp;родителей».
            Мы&nbsp;представили детское образование и&nbsp;воспитание
            как&nbsp;темный лес, где&nbsp;больше вопросов, чем&nbsp;ответов,
            чтобы&nbsp;вместе с&nbsp;экспертами Skysmart и&nbsp;приглашенными
            звездами разобраться во&nbsp;всех волнующих вопросах.
          </p>
        </NumberBlock>
        <Gallery type={4} cln="skysmartcamp">
          {[5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartcamp/${i}.jpg`)}
              alt="skysmartcamp"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={1}>телеграм-бот</Number>
          <p>
            Яркие и&nbsp;атмосферные декорации: костер с&nbsp;котелком, палатки,
            лес и&nbsp;облака, — создали уютную атмосферу, несмотря
            на&nbsp;удаленный формат, с&nbsp;которым мы&nbsp;успешно справились
            и&nbsp;обеспечили отличную картинку и&nbsp;звук для&nbsp;спикеров,
            где&nbsp;бы&nbsp;они&nbsp;не&nbsp;находились.
            <Hyperlink src={"skysmartcamp/afisha.jpg"}>
              <a
                href="https://www.afisha.ru/meeting/13682/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Афиша: бесплатный онлайн-фестиваль для&nbsp;родителей
                “Биг&nbsp;Дэй открытых дверей” об&nbsp;обучении
                и&nbsp;воспитании ребенка в&nbsp;цифровом мире
              </a>
            </Hyperlink>
          </p>
        </NumberBlock>
        <Gallery type={2}>
          {[9, 10, 11].map((i) => (
            <img
              key={i}
              src={require(`assets/cases/skysmartcamp/${i}.jpg`)}
              alt="skysmartcamp"
            />
          ))}
        </Gallery>
        <NumberBlock>
          <Number n={18}>спикеров</Number>
          <p>
            В&nbsp;числе которых Людмила Петрановская, Ирена Понарошку, Саша
            Зверева, Александр Панчин, Лариса Суркова, которые познакомили
            аудиторию с&nbsp;новыми продуктами Skysmart в&nbsp;увлекательном
            онлайн-формате.
            <Hyperlink src={"skysmartcamp/letidor.jpg"}>
              <a
                href="https://letidor.ru/amp/novosti/16-oktyabrya-proidet-besplatnyi-onlain-festival-dlya-roditelei-smartfest-13-10-2021.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Letidor: второй год подряд онлайн-школа для&nbsp;детей
                и&nbsp;подростков Skysmart организует фестиваль для&nbsp;детей
                и&nbsp;родителей
              </a>
            </Hyperlink>
          </p>
        </NumberBlock>
        <Gallery type={3}>
          {[12, 13].map((i) => (
            <img
              key={i}
              src={
                isMobile
                  ? require(`assets/cases/skysmartcamp/${i}-mobile.jpg`)
                  : require(`assets/cases/skysmartcamp/${i}.jpg`)
              }
              alt="skysmartcamp"
            />
          ))}
        </Gallery>
        <NumberBlock>
          {isMobile || <div></div>}
          <p>
            Не&nbsp;забыли и&nbsp;про&nbsp;детей —
            для&nbsp;них был&nbsp;организован отдельный Детский Эфир
            с&nbsp;интерактивами и&nbsp;уроками.
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

export default Skysmartcamp;
