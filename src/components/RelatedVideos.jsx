import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeContextApi";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  console.log(videos);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      {videos &&
        videos.map((video) => {
          return <VideoCard video={video} key={video.id} type="list" />;
        })}
    </>
  );
}
