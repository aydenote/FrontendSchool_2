import React from "react";
import Category from "../category/Category";
import Author from "../author/Author";
// import Data from "../../data/data";
import "../../css/post.css";
// import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Post({ value, count }) {
  let dataCount = count + 1;
  let imgSrc = require(`../../images/post-img${dataCount}.jpg`);

  return (
    <li>
      <Link to="/post-view.html" className="post">
        <article>
          <img src={imgSrc} alt="" />
          <div className="contents-wrap">
            <Category />
            <h3>{value.blogInfo}</h3>
            <Author author={value.userInfo} />
            <p className="post-description">{value.postInfo}</p>
          </div>
        </article>
      </Link>
    </li>
  );
}
