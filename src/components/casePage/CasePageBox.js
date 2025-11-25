import { Skeleton } from "@mui/material";
import {
  ChatClient,
  ChatTochka,
  ChatWrapper,
  ClientBlockWrapper,
  LabelClient,
  List,
} from "./clientBlock";
import { MainImage } from "./MainImage";
import { ADMIN_URL } from "api/api";
import { SkeletText } from "components/Skelet/SkeletText";
import styled from "styled-components";
import { breakpoints } from "styles/variables";

const getPhotoUrl = (photo) => ADMIN_URL + photo?.url;

const GridLayout = styled.div`
  display: grid;
  grid-template-areas: "details image image image image image" "desc desc desc chat chat chat";
  grid-template-columns: repeat(6, 1fr);
  gap: 64px 28px;
  margin-bottom: 72px;
  @media ${breakpoints.laptop} {
    margin-bottom: 5.14vw;
    gap: 4.57vw 2vw;
  }
  @media ${breakpoints.mobile} {
    margin-bottom: 32px;
    grid-template-columns: 1fr;
    grid-template-areas: "desc" "image" "details" "chat";
    gap: 20px;
  }
`;

export const CasePageBox = ({ caseData, photos, preview, isLoading }) => {
  return (
    <GridLayout>
      <List
        list={
          caseData
            ? [caseData.client, caseData.category, caseData.location]
            : []
        }
        isLoading={isLoading}
      />

      {isLoading ? (
        <Skeleton
          sx={{
            borderRadius: "3%",
            height: "auto",
            aspectRatio: "16 / 9",
            gridArea: "image",
            width: "100%",
          }}
          animation="wave"
          variant="rectangular"
        />
      ) : photos?.length > 0 ? (
        <MainImage src={getPhotoUrl(photos[0])} />
      ) : (
        <span></span>
      )}

      <LabelClient>
        {isLoading
          ? Array.from(Array(5)).map((el, i) => (
              <SkeletText
                sx={{ mb: 1, maxWidth: `calc(${(5 - i) * 20}%)` }}
                key={i}
              />
            ))
          : preview?.description}
      </LabelClient>

      {caseData && (
        <ClientBlockWrapper>
          <ChatWrapper>
            {isLoading ? (
              <ChatClient time={"8:01"}>
                <div style={{ width: "20vw" }}>
                  <SkeletText sx={{ mb: 1 }} />
                </div>
                <div style={{ width: "30%" }}>
                  <SkeletText />
                </div>
              </ChatClient>
            ) : (
              caseData.clientText && (
                <ChatClient time={"8:01"} color={preview.circle?.color}>
                  {caseData.clientText}
                </ChatClient>
              )
            )}
            {isLoading ? (
              <ChatTochka time={"8:03"}>
                <SkeletText sx={{ mb: 1 }} />
                <div style={{ width: "20%" }}>
                  <SkeletText sx={{ mb: 1 }} />
                </div>
                <div style={{ width: "50%" }}>
                  <SkeletText />
                </div>
              </ChatTochka>
            ) : (
              caseData.tochkaText && (
                <ChatTochka time={"8:03"}>{caseData.tochkaText}</ChatTochka>
              )
            )}
          </ChatWrapper>
        </ClientBlockWrapper>
      )}
    </GridLayout>
  );
};
