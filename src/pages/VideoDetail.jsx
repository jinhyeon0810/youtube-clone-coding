import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import SearchHeader from "../components/SearchHeader";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, description, channelId, channelTitle } = video.snippet;
  console.log(video.id);
  return (
    <>
      <SearchHeader />
      <section className="flex flex-col lg:flex-row">
        <article className="basis-4/6">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="360"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
          />
          <div className="p-8">
            <h2 className="text-xl font-bold">{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre className="whitespace-pre-wrap">{description}</pre>
          </div>{" "}
        </article>
        <section className="basis-4/6">
          <RelatedVideos id={video.id} />
        </section>
      </section>
    </>
  );
}
