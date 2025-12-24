import { Skeleton } from "@mui/material";
import { ADMIN_URL } from "api/api";
import { useFetch } from "api/useFetch";
import Circle from "components/Circle";
import { SkeletText } from "components/Skelet/SkeletText";
import QueryString from "qs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, mixins } from "styles/variables";

const getCaseQuery = () => {
  const query = QueryString.stringify(
    {
      sort: { createdAt: "desc" },
      populate: {
        preview: {
          populate: {
            photos: { populate: "*" },
            circle: { populate: "*" },
          },
        },
        photosWithNumber: { populate: "*" },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return `cases?${query}`;
};

export const AllCases = () => {
  const { data, isLoading } = useFetch(getCaseQuery());
  return (
    <>
      <Title>Кейсы</Title>
      <List>
        {isLoading
          ? Array.from(Array(6)).map((el, i) => <CaseSkelet key={i} />)
          : data?.data.map((el) => (
              <LinkItem key={el.id} to={"/cases/" + el.preview?.url}>
                <CaseTitle>
                  {el.preview?.circle?.color && (
                    <Circle color={el.preview?.circle.color} />
                  )}
                  {el.client}
                </CaseTitle>
                {el.preview?.photos && (
                  <Img
                    alt={el.preview.photos[0].alternativeText}
                    src={ADMIN_URL + el.preview.photos[0].url}
                  />
                )}
                {el.preview?.description && (
                  <Description>
                    <span>{el.preview.description}</span>
                  </Description>
                )}
              </LinkItem>
            ))}
      </List>
    </>
  );
};

const Description = styled.p`
  white-space: pre-line;
  max-width: 87%;
  font-size: 24px;
  line-height: 115%;
  letter-spacing: -0.02em;
  color: #222;
  word-break: break-word;
  @media ${breakpoints.laptop} {
    font-size: 1.71vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 18px;
  }
  & > span {
    ${mixins.hoveredText};
    @media ${breakpoints.mobile} {
      background-size: 100% 1px;
    }
  }
`;
const LinkItem = styled(Link)`
  &:hover {
    & ${Description}>span {
      background-size: 100% 1px;
    }
  }
`;
const Img = styled.img`
  display: block;
  height: auto;
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 28px;
  @media ${breakpoints.laptop} {
    margin-bottom: 2vw;
    border-radius: 1.43vw;
  }
  @media ${breakpoints.mobile} {
    margin-bottom: 20px;
    border-radius: 12px;
    display: none;
  }
`;

const CaseTitle = styled.h3`
  & > svg {
    flex-shrink: 0;
  }
  word-break: break-word;
  display: flex;
  letter-spacing: -0.02em;
  gap: 8px;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  color: #222;
  margin-bottom: 16px;
  @media ${breakpoints.laptop} {
    margin-bottom: 1.14vw;
    gap: 0.57vw;
    font-size: 1.29vw;
  }
  @media ${breakpoints.mobile} {
    font-size: 14px;
    gap: 10px;
    margin-bottom: 10px;
  }
`;
const Title = styled.h2`
  padding: 24px 0;
  font-weight: 500;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #222;
  @media ${breakpoints.laptop} {
    padding: 1.71vw 0;
    font-size: 5.14vw;
  }
  @media ${breakpoints.mobile} {
    padding: 4px 0;
    font-size: 42px;
    line-height: 100%;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 36px 0 92px;
  gap: 72px 28px;
  @media ${breakpoints.laptop} {
    padding: 2.57vw 0 6.57vw;
    gap: 5.14vw 2vw;
  }
  @media ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    padding: 20px 0;
    gap: 40px;
  }
`;

const CaseSkelet = () => (
  <li>
    <CaseTitle>
      <Skeleton
        sx={{ height: 20, width: 20 }}
        animation="wave"
        variant="circular"
      />
      <div style={{ width: "20%" }}>
        <SkeletText />
      </div>
    </CaseTitle>
    <Skeleton
      sx={{
        borderRadius: "3%",
        height: "auto",
        aspectRatio: "3 / 2",
        width: "100%",
        mb: "28px",
      }}
      animation="wave"
      variant="rectangular"
    />
    <SkeletText sx={{ mb: 1 }} />
    <SkeletText />
  </li>
);
