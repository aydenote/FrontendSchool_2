import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Data from "../../data/data";
import "../../css/view.css";
import "../../css/wrapbox.css";
import viewImg from "../../images/post-background6.jpg";
export default function View() {
  const data = useContext(Data);

  return (
    <div className="view">
      <div className="max-width">
        <section className="wrap-box">
          <div className="inner">
            {/* <!-- author --> */}
            <dl className="author-wrap">
              <dt className="a11y-hidden">{data[0].userInfo}</dt>
              <dd className="author">
                <img src="../../assets/profile.jpg" alt="" />
              </dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">2022.05.25</dd>
            </dl>
            {/* <!-- //author --> */}

            {/* <!-- category --> */}
            <dl className="category">
              <dt className="a11y-hidden">Category</dt>
              <dd>Life</dd>
              <dd>Style</dd>
            </dl>
            {/* <!-- //category --> */}
            <div className="title-wrap">
              <h2>{data[0].blogInfo}</h2>
              <button className="btn-like">Like</button>
            </div>
            <hr />
            <div className="view-contents">
              <p>{data[0].postInfo}</p>
              <img src={viewImg} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque!
                Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem
                est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas,
                voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel.
              </p>
            </div>
            <div className="btn-group">
              <Link to="/" className="btn-modify">
                <span className="a11y-hidden">modify</span>
              </Link>
              <button type="button" className="btn-delete">
                <span className="a11y-hidden">delete</span>
              </button>
            </div>
            <Link to="./" className="btn-back">
              <span className="a11y-hidden">Back</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
