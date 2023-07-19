import SvgSelector from "components/SvgSelector";
import s from "./cases.module.scss";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Parashut = () => {
  const video = useRef(null);

  const handlePlay = (e) => {
    e.target.paused ? e.target.play() : e.target.pause();
  };

  return (
    <div className={s.parashut_wrapper} onClick={handlePlay}>
      <SvgSelector svg={"video-play"} />
      <video
        className={s.parashut}
        ref={video}
        // loop
        muted="muted"
        preload="metadata"
        controls={false}
        playsInline
        poster={require("assets/parashut.jpg")}
      >
        <source src={require(`assets/video-parashut.webm`)} type="video/webm" />
        <source src={require(`assets/video-parashut.mp4`)} type="video/mp4" />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>
  );
};

export default Parashut;
