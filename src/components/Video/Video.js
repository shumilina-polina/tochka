import { useMediaQuery } from "@mui/material";
import { ADMIN_URL } from "api/api";
import SvgSelector from "components/SvgSelector";
import { useState } from "react";
import { breakpoints } from "styles/variables";

export const Video = ({ data }) => {
  const [played, setPlayed] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.paused ? e.target.play() : e.target.pause();
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video =
      e.target.tagName === "VIDEO" ? e.target : e.target.querySelector("video");
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  const isMobile = useMediaQuery(breakpoints.mobile);

  return data.video.isVimeo ? (
    <iframe
      src={data.video.vimeoUrl}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></iframe>
  ) : (
    <div
      onClick={handleVideoClick}
      onMouseOver={() => setIconVisible(true)}
      onMouseOut={() => setIconVisible(false)}
    >
      <SvgSelector
        style={{ opacity: !played ? 1 : isMobile ? 0 : iconVisible ? 1 : 0 }}
        svg={`video-${played ? "pause" : "play"}`}
      />
      <video
        onClick={handlePlay}
        onPlay={() => setPlayed(true)}
        onPause={() => setPlayed(false)}
        loop
        muted
        preload="metadata"
        controls={false}
        playsInline
      >
        <source src={ADMIN_URL + data.video?.video.url} type="video/mp4" />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>
  );
};
