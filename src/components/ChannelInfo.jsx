import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeContextApi";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      <div className="flex items-center my-4 mb-8">
        <img src={url} alt={name} className="w-10 h-10 rounded-full" />
        <div className="text-lg ml-2 font-medium">{name}</div>
      </div>
    </>
  );
}
