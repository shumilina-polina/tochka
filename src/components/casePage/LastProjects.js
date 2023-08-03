import { useMediaQuery } from "@mui/material";
import SvgSelector from "components/SvgSelector";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

export const LastProjects = ({ children }) => (
  <Block>
    <span>
      Последние <br /> проекты
    </span>
    <div>{children}</div>
  </Block>
);

const Block = styled.section`
  display: grid;
  align-items: start;
  padding: 100px 0;
  grid-template-columns: 1fr 2fr;
  @media ${breakpoints.laptop} {
    padding: 6.7vw 0;
  }
  @media ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 0 50px;
  }
  & > span {
    padding-top: 16px;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: -1.14px;
    @media ${breakpoints.laptop} {
      padding-top: 1.07vw;
      font-size: 2.5vw;
      line-height: 3.1vw;
      letter-spacing: -0.076vw;
    }
    @media ${breakpoints.mobile} {
      padding-top: 0;
      font-size: 36px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: -1.08px;
    }
  }
  & > div {
    padding-right: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 352px);
    gap: 43px 60px;
    @media ${breakpoints.laptop} {
      grid-template-rows: repeat(2, auto);
      gap: 2.88vw 4.02vw;
      padding-right: 10.45vw;
    }
    @media ${breakpoints.mobile} {
      grid-template-columns: 1fr;
      gap: 30px;
      padding-right: 0;
      grid-template-rows: auto;
    }
  }
`;

export const Project = ({ children }) => <ProjectBox>{children}</ProjectBox>;

const ProjectBox = styled.div`
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    & p > a {
      ${mixins.hoveredText}
      @media ${breakpoints.mobile} {
        background-size: 100% 1px;
      }
    }
    &:hover {
      & > div {
        & img {
          transform: scale(1.1);
          @media ${breakpoints.mobile} {
            transform: none;
          }
        }
      }
      & p > a {
        background-size: 100% 1px;
        @media ${breakpoints.mobile} {
          background-size: 100% 1px;
        }
      }
    }
    @media ${breakpoints.mobile} {
      align-items: flex-start;
      flex-direction: row;
    }
  }

  & > a > div:first-child {
    aspect-ratio: 1/1;
    overflow: hidden;
    max-width: 100%;
    border-radius: 100%;
    @media ${breakpoints.mobile} {
      width: 108px;
      height: 108px;
      flex-shrink: 0;
    }
    & > img {
      transition: transform 0.3s;
      height: auto;
    }
  }

  & > a > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    @media ${breakpoints.laptop} {
      gap: 0.67vw;
    }
    @media ${breakpoints.mobile} {
      justify-content: flex-start;
      gap: 6px;
    }
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
      @media ${breakpoints.laptop} {
        gap: 0.37vw;
      }
      @media ${breakpoints.mobile} {
        gap: 3px;
      }
      & > svg {
        height: 22px;
        width: 22px;
        @media ${breakpoints.mobile} {
          height: 17px;
          width: 17px;
        }
      }

      & > span {
        ${mixins.textSmall}
        @media ${breakpoints.mobile} {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    & > p {
      ${mixins.textSmall}
      @media ${breakpoints.mobile} {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  @media ${breakpoints.laptop} {
  }
`;
export const ProjectGazpromneft = () => (
  <Link to={"/gazpromneft"}>
    <div>
      <img
        src={require("assets/cases/projects/gazpromneft.jpg")}
        alt="Gazpromneft"
      />
    </div>
    <div>
      <div>
        <SvgSelector svg={"case1"} />
        <span>Газпромнефть</span>
      </div>
      <p>
        <a>
          Подготовили топ-менеджерам в&nbsp;Газпромнефть выступления
          в&nbsp;стиле&nbsp;TED
        </a>
      </p>
    </div>
  </Link>
);

export const ProjectHelix = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <Link to={"/helix"}>
      <div>
        <img src={require("assets/cases/projects/helix.jpg")} alt="Helix" />
      </div>
      <div>
        <div>
          <SvgSelector svg={"parashut"} />
          <span>Helix</span>
        </div>
        <p>
          <a>
            Прыжки {isMobile || <br />} с&nbsp;парашютом для&nbsp;топ-менеджеров
            Helix на&nbsp;выездном лидерском тренинге
          </a>
        </p>
      </div>
    </Link>
  );
};

export const ProjectSkysmartCamp = () => (
  <Link to={"/skysmartcamp"}>
    <div>
      <img
        src={require("assets/cases/projects/skysmartcamp.jpg")}
        alt="SkysmartCamp"
      />
    </div>
    <div>
      <div>
        <SvgSelector svg={"case3"} />
        <span>Skysmart</span>
      </div>
      <p>
        <a>
          Устроили масштабный онлайн фестиваль «SMARTfest: КЭМП
          для&nbsp;родителей»
        </a>
      </p>
    </div>
  </Link>
);

export const ProjectHighload = () => (
  <Link to={"/highload"}>
    <div>
      <img src={require("assets/cases/projects/highload.jpg")} alt="highload" />
    </div>
    <div>
      <div>
        <SvgSelector svg={"bar"} />
        <span>Space 307</span>
      </div>
      <p>
        <a>Подавали «Слезы разработчика» на&nbsp;конференции Highload 2022</a>
      </p>
    </div>
  </Link>
);
export const ProjectMontblanc = () => (
  <Link to={"/montblanc"}>
    <div>
      <img
        src={require("assets/cases/projects/montblanc.jpg")}
        alt="Montblanc"
      />
    </div>
    <div>
      <div>
        <SvgSelector svg={"case2"} />
        <span>Montblanc</span>
      </div>
      <p>
        <a>
          Оформили Montblanc к&nbsp;открытию за&nbsp;2&nbsp;дня,
          без&nbsp;приостановки работы бутика
        </a>
      </p>
    </div>
  </Link>
);
export const ProjectVk = () => (
  <Link to={"/vk"}>
    <div>
      <img src={require("assets/cases/projects/vk.jpg")} alt="vk" />
    </div>
    <div>
      <div>
        <SvgSelector svg={"case4"} />
        <span>Вконтакте</span>
      </div>
      <p>
        <a>
          Подружили новых сотрудников Вконтакте в&nbsp;шоу по&nbsp;пьесам Чехова
          в&nbsp;атмосфере 19 века
        </a>
      </p>
    </div>
  </Link>
);
export const ProjectSkysmartBigday = () => {
  const isMobile = useMediaQuery(breakpoints.mobile);

  return (
    <Link to={"/skysmartbigday"}>
      <div>
        <img
          src={require("assets/cases/projects/skysmartbigday.jpg")}
          alt="skysmartBigday"
        />
      </div>
      <div>
        <div>
          <SvgSelector svg={"case3"} />
          <span>Skysmart</span>
        </div>
        <p>
          <a>
            Организовали {isMobile || <br />} онлайн фестиваль «BIG&nbsp;DAY
            открытых дверей Skysmart»
          </a>
        </p>
      </div>
    </Link>
  );
};
