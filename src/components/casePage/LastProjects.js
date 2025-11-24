import { ADMIN_URL } from "api/api";
import { useFetch } from "api/useFetch";
import Circle from "components/Circle";
import QueryString from "qs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

const getLastCasesQuery = (currentSlug) => {
  const query = QueryString.stringify(
    {
      // sort: ["createdAt:desc"],
      sort: { createdAt: "desc" },
      pagination: { limit: 5 },
      filters: {
        preview: {
          url: { $ne: currentSlug }, // исключаю текущий кейс
        },
      },
      populate: {
        preview: {
          populate: { photos: { populate: "*" }, circle: { populate: "*" } },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  return `cases?${query}`;
};

export const LastProjects = () => {
  const { caseSlug } = useParams();
  const { data } = useFetch(getLastCasesQuery(caseSlug));

  const lastProjects = data?.data || [];
  return (
    lastProjects.length > 0 && (
      <Wrapper>
        <h2>Последние проекты</h2>
        <List>
          {lastProjects.map((el) => (
            <ProjectItem to={"/cases/" + el.preview?.url} key={el.id}>
              {el.preview?.photos?.[0] && (
                <ImageWrapper>
                  <img
                    alt={el.preview?.photos[0].alternativeText}
                    src={ADMIN_URL + el.preview?.photos[0].url}
                  />
                </ImageWrapper>
              )}
              <Box>
                <Title>
                  {el.preview?.circle?.color && (
                    <Circle color={el.preview?.circle.color} />
                  )}
                  {el.client}
                </Title>
                <Description style={{ whiteSpace: "pre-line" }}>
                  <a>{el.preview?.description}</a>
                </Description>
              </Box>
            </ProjectItem>
          ))}
        </List>
      </Wrapper>
    )
  );
};

const Box = styled.div`
  padding: 0 12px;
  @media ${breakpoints.laptop} {
    padding: 0 0.86vw;
  }
  @media ${breakpoints.mobile} {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  padding: 72px 0 102px;
  @media ${breakpoints.laptop} {
    padding: 5.14vw 0 7.29vw;
  }
  @media ${breakpoints.mobile} {
    padding: 56px 0;
  }
  & > h2 {
    font-weight: 400;
    font-size: 38px;
    line-height: 121%;
    letter-spacing: -0.03em;
    color: #222;
    margin-bottom: 56px;
    @media ${breakpoints.laptop} {
      margin-bottom: 4vw;
      font-size: 2.71vw;
    }
    @media ${breakpoints.mobile} {
      margin-bottom: 56px;
      max-width: 70%;
      font-size: 28px;
      line-height: 110%;
    }
  }
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  @media ${breakpoints.laptop} {
    gap: 2.86vw;
  }
  @media ${breakpoints.mobile} {
    gap: 40px;
    grid-template-columns: 1fr;
  }
`;
const Description = styled.p`
  font-size: 18px;
  word-break: break-word;
  line-height: 133%;
  color: #222;
  @media ${breakpoints.laptop} {
    font-size: 1.29vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 14px;
    line-height: 120%;
  }
  & > a {
    ${mixins.hoveredText}
    @media ${breakpoints.mobile} {
      background-size: 100% 1px;
    }
  }
`;
const ProjectItem = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  &:hover {
    & img {
      transform: scale(1.1);
      @media ${breakpoints.mobile} {
        transform: none;
      }
    }
    & ${Description} > a {
      background-size: 100% 1px;
      @media ${breakpoints.mobile} {
        background-size: 100% 1px;
      }
    }
  }
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
  }
`;
const Title = styled.h3`
  & > svg {
    flex-shrink: 0;
  }
  word-break: break-word;
  display: flex;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: #222;
  margin-bottom: 12px;
  @media ${breakpoints.laptop} {
    gap: 0.71vw;
    font-size: 1.29vw;
    margin-bottom: 0.86vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 14px;
    gap: 4px;
    margin-bottom: 9.5px;
  }
`;
const ImageWrapper = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;
  max-width: 100%;
  border-radius: 100%;
  margin: 0 40px 20px 0;
  @media ${breakpoints.laptop} {
    margin: 0 2.86vw 1.43vw 0;
  }
  @media ${breakpoints.mobile} {
    margin: 0;
    max-width: 100px;
    flex-shrink: 0;
  }
  & > img {
    object-fit: cover;
    transition: transform 0.3s;
  }
`;
