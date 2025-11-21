import { ADMIN_URL } from "api/api";
import styled from "styled-components";
import { breakpoints } from "styles/variables";

const GridLayout = styled.div`
  display: grid;
  gap: 28px;
  @media ${breakpoints.laptop} {
    gap: 2vw;
  }
  @media ${breakpoints.mobile} {
    gap: 8px;
  }
`;
const GalleryContainer = styled(GridLayout)`
  width: 100%;
  padding: 72px 0;
  @media ${breakpoints.laptop} {
    padding: 5.14vw 0;
  }
  @media ${breakpoints.mobile} {
    padding: 20px 0;
  }
`;
const GridLayout1 = styled(GridLayout)`
  grid-template-columns: repeat(3, 1fr);
  @media ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const GridLayout2 = styled(GridLayout)`
  grid-template-columns: repeat(2, 1fr);
  @media ${breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const GridLayout3 = styled(GridLayout)`
  grid-template-columns: repeat(3, 1fr);
  @media ${breakpoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    & > div:first-child {
      grid-column: span 2;
    }
  }
`;

const GridLayout4Row1 = styled(GridLayout)`
  @media ${breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const GridLayout4Row2 = styled(GridLayout)`
  grid-template-columns: repeat(3, 1fr);
  @media ${breakpoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  @media ${breakpoints.laptop} {
    border-radius: 1.43vw;
  }
  @media ${breakpoints.mobile} {
    border-radius: 12px;
  }
`;

const PhotoWrapper = styled.div`
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 20px;
  @media ${breakpoints.laptop} {
    border-radius: 1.43vw;
  }
  @media ${breakpoints.mobile} {
    border-radius: 12px;
  }
`;

const PhotoWrapperSpan2 = styled(PhotoWrapper)`
  grid-column: span 2;
`;

const Gallery = ({ photos }) => {
  const photoCount = photos.length;

  if (photoCount === 1) {
    return (
      <GalleryContainer>
        <GridLayout1>
          <PhotoWrapperSpan2>
            <PhotoImage
              src={ADMIN_URL + photos[0].url}
              alt={photos[0].alternativeText}
            />
          </PhotoWrapperSpan2>
        </GridLayout1>
      </GalleryContainer>
    );
  }

  if (photoCount === 2) {
    return (
      <GalleryContainer>
        <GridLayout2>
          {photos.map((photo) => (
            <PhotoWrapper key={photo.id}>
              <PhotoImage
                src={ADMIN_URL + photo.url}
                alt={photo.alternativeText}
              />
            </PhotoWrapper>
          ))}
        </GridLayout2>
      </GalleryContainer>
    );
  }

  if (photoCount === 3) {
    return (
      <GalleryContainer>
        <GridLayout3>
          {photos.map((photo) => (
            <PhotoWrapper key={photo.id}>
              <PhotoImage
                src={ADMIN_URL + photo.url}
                alt={photo.alternativeText}
              />
            </PhotoWrapper>
          ))}
        </GridLayout3>
      </GalleryContainer>
    );
  }

  if (photoCount === 4) {
    return (
      <GalleryContainer>
        <GridLayout4Row1>
          <PhotoWrapper>
            <PhotoImage
              src={ADMIN_URL + photos[0].url}
              alt={photos[0].alternativeText}
            />
          </PhotoWrapper>
          <PhotoWrapper>
            <PhotoImage
              src={ADMIN_URL + photos[1].url}
              alt={photos[1].alternativeText}
            />
          </PhotoWrapper>
        </GridLayout4Row1>
        <GridLayout4Row2>
          <PhotoWrapper>
            <PhotoImage
              src={ADMIN_URL + photos[2].url}
              alt={photos[2].alternativeText}
            />
          </PhotoWrapper>
          <PhotoWrapper>
            <PhotoImage
              src={ADMIN_URL + photos[3].url}
              alt={photos[3].alternativeText}
            />
          </PhotoWrapper>
        </GridLayout4Row2>
      </GalleryContainer>
    );
  }

  return (
    <GalleryContainer>
      <GridLayout3>
        {photos.map((photo) => (
          <PhotoWrapper key={photo.id}>
            <PhotoImage
              src={ADMIN_URL + photo.url}
              alt={photo.alternativeText}
            />
          </PhotoWrapper>
        ))}
      </GridLayout3>
    </GalleryContainer>
  );
};

export default Gallery;
