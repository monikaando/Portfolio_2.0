import React, { FC, ReactElement } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

type YouTubeVideoProps = {
  videoId: string;
};
const YouTubeVideo: FC<YouTubeVideoProps> = ({
  videoId,
}: YouTubeVideoProps): ReactElement => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "340",
    width: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
};
export default YouTubeVideo;
