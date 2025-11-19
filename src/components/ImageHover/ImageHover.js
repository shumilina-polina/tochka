import { useState } from "react";
import s from "./imageHover.module.scss";
import { Fragment } from "react";
import { ADMIN_URL } from "api/api";

const ImageHover = ({ data }) => {
  const [BoxNumber, setBoxNumber] = useState(0);
  return (
    <div
      className={s.wr}
      onTouchMove={(e) => {
        const parentWidth = e.target.offsetParent.clientWidth;
        if (e.touches[0].clientX < parentWidth / 5) {
          setBoxNumber(0);
        } else if (e.touches[0].clientX < (2 * parentWidth) / 5) {
          setBoxNumber(1);
        } else if (e.touches[0].clientX < (3 * parentWidth) / 5) {
          setBoxNumber(2);
        } else if (e.touches[0].clientX < (4 * parentWidth) / 5) {
          setBoxNumber(3);
        } else {
          setBoxNumber(4);
        }
      }}
    >
      {data &&
        data.slice(0, 4).map((photo, i) => (
          <Fragment key={photo.id}>
            <div data-id={i} onMouseOver={() => setBoxNumber(i)}></div>
            <img
              src={ADMIN_URL + photo.url}
              alt={photo.alternativeText}
              style={{ opacity: BoxNumber === i ? 1 : 0 }}
            />
          </Fragment>
        ))}
    </div>
  );
};

export default ImageHover;
