import { useState } from "react";
import "./post.css";

interface PostProps {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

interface Props {
  data: PostProps;
}

export const Post = ({ data }: Props) => {
  const { date, explanation, title, url }: PostProps = data;
  const [likeState, setLikeState] = useState<boolean>(false);

  return (
    <div className="post">
      <img className="post-img" src={url} alt={`img: ${date}`} />
      <div className="post-header">
        <h2>{title}</h2>
        <h3>{date}</h3>
      </div>
      <p className="post-description">{explanation}</p>
      <div className="post-control">
        <button onClick={() => setLikeState((state: boolean) => !state)}>
          {!likeState ? "Like" : "Unlike"}
        </button>
      </div>
      <div className="post-comment"> </div>
    </div>
  );
};
