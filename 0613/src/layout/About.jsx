import React from "react";
import "../css/about.css";
import { useContext } from "react";
import Data from "../data/data";
import FacebookSvg from "../assets/Facebook.svg";
import TwitterSvg from "../assets/Twitter.svg";
import InstaSvg from "../assets/Instagram.svg";
import GitSvg from "../assets/Github.svg";
export default function About() {
    const data = useContext(Data);
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src="../assets/profile.jpg" alt="" className="user-profile" />
            <p className="user-name">{data[0].userInfo}</p>
            <p className="user-description">{data[0].blogInfo}</p>
            <h3>Categories</h3>
            <ul className="categories">
                <li>
                    <a href="#">Life</a>
                </li>
                <li>
                    <a href="#">Style</a>
                </li>
                <li>
                    <a href="#">Tech</a>
                </li>
                <li>
                    <a href="#">Sport</a>
                </li>
                <li>
                    <a href="#">Photo</a>
                </li>
                <li>
                    <a href="#">Develop</a>
                </li>
                <li>
                    <a href="#">Music</a>
                </li>
            </ul>
            <h3>Follow</h3>
            <ul className="sns">
                <li>
                    <a href="#">
                        <img src={FacebookSvg} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={TwitterSvg} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={InstaSvg} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={GitSvg} alt="GitHub" />
                    </a>
                </li>
            </ul>
        </aside>
    );
}
