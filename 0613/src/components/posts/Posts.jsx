import React from "react";
import Post from "../post/Post";
import "../../css/posts.css";
import Data from "../../data/data";
import { useContext } from "react";
export default function Posts() {
  let data = useContext(Data);

  return (
    <div className="max-width">
      <h2 className="a11y-hidden">Post</h2>
      <ul className="posts">
        {data.map((value, index) => (
          <Post value={value} count={index} key={index} />
        ))}
      </ul>
    </div>
  );
}
