import React from "react";
import { formatAgo } from "../utill/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();

  const isList = type;
  return (
    <>
      <li
        className={isList ? "flex m-2 gap-1" : ""}
        onClick={() =>
          navigate(`/videos/watch/${video.id}`, { state: { video: video } })
        }
      >
        <img
          className={isList ? "w-60 mr-4" : "w-full"}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
        </div>
      </li>
    </>
  );
}
