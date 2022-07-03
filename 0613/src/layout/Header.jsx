import React, { useState } from "react";
import "../css/header.css";
import "../css/button.css";
import LogoSvg from "../assets/Logo.svg";
import HeaderBtn from "../components/button/HeaderBtn";

export default function Header() {
  const [dataKey, setdataKey] = useState("logout");
  const checkKey = (e) => {
    e.preventDefault();
    if (e.target.dataset.key === "login" || e.target.dataset.key === "logout") {
      setdataKey(e.target.dataset.key);
    }
  };
  return (
    <header>
      <div className="max-width">
        <h1>
          <a href="./">
            <img src={LogoSvg} alt="My Blog" />
          </a>
        </h1>
        <ul onClick={checkKey}>
          <HeaderBtn dataKey={dataKey} />
        </ul>
      </div>
    </header>
  );
}
