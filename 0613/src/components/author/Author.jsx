import React from "react";
import "../../css/author.css";
export default function author({ author }) {
    return (
        <dl className="author-wrap">
            <dt className="a11y-hidden">Author</dt>
            <dd className="author">
                <img src="../../assets/profile.jpg" alt="" /> {author}
            </dd>
            <dt className="a11y-hidden">Created</dt>
            <dd className="created">2022.05.25</dd>
        </dl>
    );
}
