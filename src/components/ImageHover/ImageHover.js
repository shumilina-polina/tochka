import { useState } from "react";
import s from "./imageHover.module.scss";
import { Fragment } from "react";

const ImageHover = ({ folder }) => {
  const [BoxNumber, setBoxNumber] = useState(0);
  return (
    <div onMouseOut={() => setBoxNumber(0)} className={s.wr}>
      <img
        src={require(`assets/${folder}/0.jpg`)}
        alt="Event"
        style={{ opacity: BoxNumber === 0 ? 1 : 0 }}
      />
      {[1, 2, 3, 4].map((i) => (
        <Fragment key={i}>
          <div onMouseOver={() => setBoxNumber(i)}></div>
          <img
            src={require(`assets/${folder}/${i}.jpg`)}
            alt="Event"
            style={{ opacity: BoxNumber === i ? 1 : 0 }}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ImageHover;
