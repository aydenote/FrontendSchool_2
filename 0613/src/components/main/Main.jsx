import React from "react";
import Posts from "../posts/Posts";
import About from "../../layout/About";
import "../../css/main.css";

export default function Main() {
    return (
        <main>
            <div className="max-width">
                <h2 className="a11y-hidden">Post</h2>
                <Posts />
                <About />
            </div>
        </main>
    );
}
