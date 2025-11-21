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

export const CasePageBox = ({ caseData, photos, preview }) => {
  return (
    <GridLayout>
      {caseData ? (
        <List list={[caseData.client, caseData.category, caseData.location]} />
      ) : (
        <span></span>
      )}
      {photos.length > 0 ? (
        <MainImage src={getPhotoUrl(photos[0])} />
      ) : (
        <span></span>
      )}

      {preview?.description ? (
        <LabelClient>{preview.description}</LabelClient>
      ) : (
        <span></span>
      )}
      {caseData && (
        <ClientBlockWrapper>
          <ChatWrapper>
            {caseData.clientText && (
              <ChatClient time={"8:01"} color={preview.circle?.color}>
                {caseData.clientText}
              </ChatClient>
            )}
            {caseData.tochkaText && (
              <ChatTochka time={"8:03"}>{caseData.tochkaText}</ChatTochka>
            )}
          </ChatWrapper>
        </ClientBlockWrapper>
      )}
    </GridLayout>
  );
};
