import SvgSelector from "components/SvgSelector";
import s from "./cases.module.scss";
import { useState } from "react";
import { useRef } from "react";
import { breakpoints } from "styles/variables";
import { useMediaQuery } from "@mui/material";

const Parashut = () => {
  const [played, setPlayed] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);
  const isMobile = useMediaQuery(breakpoints.mobile);

  const handlePlay = (e) => {
    e.target.paused ? e.target.play() : e.target.pause();
  };

  return (
    <div
      className={s.parashut_wrapper}
      onClick={handlePlay}
      onMouseOver={() => setIconVisible(true)}
      onMouseOut={() => setIconVisible(false)}
    >
      <SvgSelector
        style={{ opacity: !played ? 1 : isMobile ? 0 : iconVisible ? 1 : 0 }}
        svg={`video-${played ? "pause" : "play"}`}
      />
      <video
        className={s.parashut}
        onPlay={() => setPlayed(true)}
        onPause={() => setPlayed(false)}
        loop
        muted
        preload="metadata"
        controls={false}
        playsInline
        poster={require("assets/parashut.jpg")}
      >
        <source src={require(`assets/video-parashut.mp4`)} type="video/mp4" />
        <source src={require(`assets/video-parashut.webm`)} type="video/webm" />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>
  );
};

export default Parashut;
