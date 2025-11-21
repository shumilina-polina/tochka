import Circle from "components/Circle";
import SvgSelector from "components/SvgSelector";
import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

export const ClientBlockWrapper = ({ children }) => <Block>{children}</Block>;
const Block = styled.div`
  grid-area: chat;
  display: flex;
  align-items: flex-start;
  @media ${breakpoints.laptop} {
    justify-content: space-between;
  }
  @media ${breakpoints.mobile} {
    padding: 12px 0;
    flex-direction: column;
    gap: 30px;
  }
`;

export const LabelClient = ({ children }) => <Text>{children}</Text>;
const Text = styled.p`
  font-size: 38px;
  grid-area: desc;
  line-height: 121%;
  letter-spacing: -0.03em;

  @media ${breakpoints.laptop} {
    font-size: 2.71vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 20px;
  }
`;

export const ChatWrapper = ({ children }) => <WrChat>{children}</WrChat>;
const WrChat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatClient = ({ children, time, color }) => (
  <Wr>
    <div>
      <span>K</span>
      <Circle color={color} />
    </div>
    <div>
      <header>
        <span>Клиент</span>
        <span>{time}</span>
      </header>
      <p>{children}</p>
    </div>
  </Wr>
);
const Wr = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;

  @media ${breakpoints.laptop} {
    margin-bottom: 1.1vw;
  }
  @media ${breakpoints.mobile} {
    margin-bottom: 16px;
  }
  & > div:first-child {
    position: relative;
    flex-shrink: 0;
    width: 70px;
    height: 70px;

    @media ${breakpoints.laptop} {
      width: 5.1vw;
      height: 5.1vw;
    }
    @media ${breakpoints.mobile} {
      width: 50px;
      height: 50px;
    }
    & > span {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-weight: 800;
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-weight: 800;
      line-height: 40px;
      @media ${breakpoints.laptop} {
        font-size: 1.61vw;
        line-height: 2.68vw;
      }
      @media ${breakpoints.mobile} {
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
  & > div:last-child {
    padding: 12px 12px 16px 16px;
    border-radius: 6px 20px 20px 20px;
    background-color: #f6f5f5;

    @media ${breakpoints.laptop} {
      padding: 0.8vw 0.8vw 1vw 1vw;
    }
    @media ${breakpoints.mobile} {
      padding: 12px 12px 16px 16px;
    }
    & > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      @media ${breakpoints.laptop} {
        margin-bottom: 0.4vw;
      }
      @media ${breakpoints.mobile} {
        margin-bottom: 6px;
      }
      & > span {
        &:first-child {
          ${mixins.textSmall}
          font-weight: 700;
        }
        &:last-child {
          color: #aaaaaa;
          font-size: 16px;
          line-height: 24px;
          @media ${breakpoints.laptop} {
            font-size: 1.1vw;
            line-height: 1.2vw;
          }
          @media ${breakpoints.mobile} {
            font-size: 10px;
            line-height: 18px;
          }
        }
      }
    }
    & > p {
      ${mixins.textSmall}
      @media ${breakpoints.mobile} {
        font-size: 14px;
      }
    }
  }

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const ChatTochka = ({ children, time }) => (
  <WrTochka>
    <div>
      <span>Т</span>
      <SvgSelector svg={"chat-black"} />
    </div>
    <div>
      <header>
        <span>Точка</span>
        <span>{time}</span>
      </header>
      <p style={{ whiteSpace: "pre-line" }}>{children}</p>
    </div>
  </WrTochka>
);
const WrTochka = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  & > div:first-child {
    position: relative;
    width: 70px;
    height: 70px;
    flex-shrink: 0;

    @media ${breakpoints.laptop} {
      width: 5.1vw;
      height: 5.1vw;
    }
    @media ${breakpoints.mobile} {
      width: 50px;
      height: 50px;
    }
    & > span {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-weight: 800;
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-weight: 800;
      line-height: 40px;
      @media ${breakpoints.laptop} {
        font-size: 1.61vw;
        line-height: 2.68vw;
      }
      @media ${breakpoints.mobile} {
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
  & > div:last-child {
    flex-grow: 1;
    padding: 12px 12px 16px 16px;
    border-radius: 6px 20px 20px 20px;
    background-color: #f6f5f5;

    @media ${breakpoints.laptop} {
      padding: 0.8vw 0.8vw 1vw 1vw;
    }
    @media ${breakpoints.mobile} {
      padding: 12px 12px 16px 16px;
    }
    & > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      @media ${breakpoints.laptop} {
        margin-bottom: 0.4vw;
      }
      @media ${breakpoints.mobile} {
        margin-bottom: 6px;
      }
      & > span {
        &:first-child {
          ${mixins.textSmall}
          font-weight: 700;
        }
        &:last-child {
          color: #aaaaaa;
          font-size: 16px;
          line-height: 24px;
          @media ${breakpoints.laptop} {
            font-size: 1.1vw;
            line-height: 1.2vw;
          }
          @media ${breakpoints.mobile} {
            font-size: 10px;
            line-height: 18px;
          }
        }
      }
    }
    & > p {
      ${mixins.textSmall}
      @media ${breakpoints.mobile} {
        font-size: 14px;
      }
    }
  }
`;

export const List = ({ list }) => (
  <ListWr>
    <li>
      <span>Клиент</span>
      <p>{list[0]}</p>
    </li>
    <li>
      <span>Категория</span>
      <p>{list[1]}</p>
    </li>
    <li>
      <span>Локация</span>
      <p>{list[2]}</p>
    </li>
  </ListWr>
);
const ListWr = styled.ul`
  grid-area: details;
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  ${mixins.textSmall}

  @media ${breakpoints.laptop} {
    gap: 1.6vw;
  }
  @media ${breakpoints.mobile} {
    gap: 12px;
    font-size: 14px;
    line-height: 18px;
  }
  & span {
    color: #aaa;
    margin-bottom: 2px;
  }
  & p {
    word-break: break-word;
    white-space: pre-line;
  }
`;
