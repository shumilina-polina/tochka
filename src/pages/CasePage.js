import { useParams } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import { LastProjects, Project } from "components/casePage/LastProjects";
import { MainImage } from "components/casePage/MainImage";
import {
  ChatClient,
  ChatTochka,
  ChatWrapper,
  ClientBlockWrapper,
  LabelClient,
} from "components/casePage/clientBlock";
import { Gallery } from "components/casePage/galleries/Gallery";
import { breakpoints } from "styles/variables";
import QueryString from "qs";
import { useFetch } from "api/useFetch";
import { ADMIN_URL } from "api/api";

const getCaseQuery = (slug) => {
  const query = QueryString.stringify(
    {
      populate: {
        preview: {
          populate: { photos: { populate: "*" } },
        },
      },
      filters: {
        preview: {
          url: {
            $eq: slug,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return `cases?${query}`;
};

const CasePage = () => {
  const { caseSlug } = useParams();
  const isMobile = useMediaQuery(breakpoints.mobile);

  const { data, isLoading } = useFetch(getCaseQuery(caseSlug));

  if (isLoading) return <div>Загрузка...</div>;

  if (!data?.data || data.data.length === 0) {
    return (
      <Wrapper>
        <Box
          sx={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Кейс не найден
        </Box>
      </Wrapper>
    );
  }

  const preview = data.data[0]?.preview;
  const photos = preview?.photos || [];

  const getPhotoUrl = (photo) => {
    return ADMIN_URL + (photo?.formats?.thumbnail?.url || photo?.url);
  };

  const getFullPhotoUrl = (photo) => {
    return ADMIN_URL + photo?.url;
  };

  const relatedProjects = photos[0]?.related || [];

  return (
    <section>
      <Wrapper>
        {preview?.description && (
          <CaseHeader
            title={preview?.description}
            description={preview?.secondDescription}
          />
        )}

        {photos.length > 0 && (
          <MainImage
            src={getFullPhotoUrl(photos[0])}
            srcMobile={getPhotoUrl(photos[0])}
          />
        )}

        {preview && (
          <ClientBlockWrapper>
            {preview?.description && (
              <LabelClient>{preview?.description}</LabelClient>
            )}
            <ChatWrapper>
              {preview?.description && (
                <ChatClient time={"8:01"} svgType={`${caseSlug}-case`}>
                  {preview?.description}
                </ChatClient>
              )}
              {preview?.secondDescription && (
                <ChatTochka time={"8:03"}>
                  {preview?.secondDescription}
                </ChatTochka>
              )}
            </ChatWrapper>
          </ClientBlockWrapper>
        )}

        {/* Галерея всех фото */}
        {photos.length > 0 && (
          <Gallery type={1}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={isMobile ? getPhotoUrl(photo) : getFullPhotoUrl(photo)}
                alt={`${preview?.description} - фото ${index + 1}`}
              />
            ))}
          </Gallery>
        )}

        {/* Связанные проекты */}
        {relatedProjects.length > 0 && (
          <LastProjects>
            {relatedProjects.map((project, i) => (
              <Project key={i} url={ADMIN_URL + project.url}>
                <Box sx={{ p: 2 }}>
                  <h3>{project.description}</h3>
                  {project.secondDescription && (
                    <p>{project.secondDescription}</p>
                  )}
                </Box>
              </Project>
            ))}
          </LastProjects>
        )}
      </Wrapper>
    </section>
  );
};

export default CasePage;
