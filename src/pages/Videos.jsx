import React from "react";
import SearchHeader from "../components/SearchHeader";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  console.log(videos);
  return (
    <>
      <SearchHeader />
      <div>Videos {keyword ? `🔍${keyword}` : "💥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
        {videos &&
          videos.map((video) => {
            return <VideoCard video={video} key={video.id} />;
          })}
      </ul>
    </>
  );
}
