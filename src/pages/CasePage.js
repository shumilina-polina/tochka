import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Wrapper from "components/Wrapper";
import CaseHeader from "components/casePage/CaseHeader";
import QueryString from "qs";
import { useFetch } from "api/useFetch";
import Gallery from "components/casePage/galleries/Gallery";
import { CasePageBox } from "components/casePage/CasePageBox";
import { CaseNumberBlock } from "components/casePage/CaseNumberBlock";
import { LastProjects } from "components/casePage/LastProjects";

const getCaseQuery = (slug) => {
  const query = QueryString.stringify(
    {
      populate: {
        preview: {
          populate: {
            photos: { populate: "*" },
            circle: { populate: "*" },
          },
        },
        photosWithNumber: { populate: "*" },
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
  const caseData = data.data[0];
  const preview = caseData?.preview;
  const photos = preview?.photos || [];

  return (
    <section>
      <Wrapper>
        <CaseHeader />

        <CasePageBox caseData={caseData} preview={preview} photos={photos} />
        {caseData?.photosWithNumber?.map((el) => {
          return (
            <Box key={el.id}>
              <Gallery photos={el.photos.slice(0, 4)} />
              {el.photosWithNumber ? (
                <CaseNumberBlock data={el.photosWithNumber} />
              ) : (
                <span></span>
              )}
            </Box>
          );
        })}

        <LastProjects />
      </Wrapper>
    </section>
  );
};

export default CasePage;
